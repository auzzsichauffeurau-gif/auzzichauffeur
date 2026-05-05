interface AuthorBioProps {
    author: {
        name: string;
        role: string;
        description: string;
        imageUrl?: string;
    };
}

export default function AuthorBio({ author }: AuthorBioProps) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            padding: '2rem',
            backgroundColor: '#f9fafb',
            borderTop: '1px solid #e5e7eb',
            marginTop: '3rem',
            borderRadius: '6px'
        }}>
            <img
                src={author.imageUrl || '/tile-driver.png'}
                alt={author.name}
                style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    flexShrink: 0
                }}
            />
            <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>
                    {author.name}
                </h3>
                <span style={{ fontSize: '0.9rem', color: '#c5a467', fontWeight: 600 }}>
                    {author.role}
                </span>
                <p style={{ fontSize: '0.95rem', color: '#4b5563', lineHeight: '1.6', marginTop: '0.5rem' }}>
                    {author.description}
                </p>
            </div>
        </div>
    );
}
