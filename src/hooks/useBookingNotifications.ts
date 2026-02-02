import { useEffect, useRef } from 'react';
import { supabase } from '@/lib/supabaseClient';

export function useBookingNotifications() {
    const notifiedBookings = useRef<Set<string>>(new Set());

    useEffect(() => {
        // 1. Request Permission immediately on mount
        if (Notification.permission === 'default') {
            Notification.requestPermission();
        }

        // 2. Define the check function
        const checkUpcomingBookings = async () => {
            if (Notification.permission !== 'granted') return;

            const now = new Date();
            // Check for bookings in the next 60 minutes
            // We'll simplisticly fetch "Pending" or "Confirmed" bookings for TODAY
            // And then filter in JS for precise time to avoid timezone complexity in SQL for this demo
            const todayStr = now.toISOString().split('T')[0];

            const { data: bookings } = await supabase
                .from('bookings')
                .select('*')
                .eq('pickup_date', todayStr)
                .in('status', ['Confirmed', 'Pending']);

            if (!bookings) return;

            bookings.forEach(booking => {
                // Combine date and time
                // Assuming pickup_time is "HH:MM" or "HH:MM:SS"
                if (!booking.pickup_time) return;

                const dateTimeStr = `${booking.pickup_date}T${booking.pickup_time}`;
                const bookingTime = new Date(dateTimeStr);

                // Calculate difference in minutes
                const diffMs = bookingTime.getTime() - now.getTime();
                const diffMins = Math.round(diffMs / 60000);

                // Alert if between 0 and 60 minutes away AND not already notified
                if (diffMins > 0 && diffMins <= 60 && !notifiedBookings.current.has(booking.id)) {

                    // Trigger System Notification
                    const title = `🚗 Job Starting in ${diffMins} mins!`;
                    const body = `${booking.customer_name} @ ${booking.pickup_location}`;

                    new Notification(title, {
                        body: body,
                        icon: '/favicon.ico', // Ensure you have a favicon or logo path
                        requireInteraction: true, // Key: Keeps notification on screen until clicked
                        tag: booking.id // Prevents duplicate notifications for same event
                    });

                    // Play a subtle sound
                    const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-software-interface-start-2574.mp3');
                    audio.play().catch(e => console.log('Audio play failed', e));

                    // Mark as notified in this session
                    notifiedBookings.current.add(booking.id);
                }
            });
        };

        // 3. Run immediately and then every 60 seconds
        checkUpcomingBookings();
        const intervalId = setInterval(checkUpcomingBookings, 60 * 1000);

        return () => clearInterval(intervalId);
    }, []);

    const requestPermission = () => {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                new Notification('Notifications Enabled', {
                    body: 'You will now be alerted for upcoming trips!'
                });
            }
        });
    };

    return { requestPermission };
}
