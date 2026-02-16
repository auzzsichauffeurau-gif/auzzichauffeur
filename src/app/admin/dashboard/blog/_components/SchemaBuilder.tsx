'use client';

import { Plus, Trash2 } from 'lucide-react';

export interface FAQItem {
    question: string;
    answer: string;
}

interface SchemaBuilderProps {
    faqs: FAQItem[];
    onChange: (faqs: FAQItem[]) => void;
}

export default function SchemaBuilder({ faqs = [], onChange }: SchemaBuilderProps) {
    const addFAQ = () => {
        onChange([...faqs, { question: '', answer: '' }]);
    };

    const updateFAQ = (index: number, field: 'question' | 'answer', value: string) => {
        const newFaqs = [...faqs];
        newFaqs[index][field] = value;
        onChange(newFaqs);
    };

    const removeFAQ = (index: number) => {
        onChange(faqs.filter((_, i) => i !== index));
    };

    return (
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mt-8">
            <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                FAQ Schema (SEO)
            </h3>
            <p className="text-sm text-gray-500 mb-6">Add questions and answers here. They will be automatically formatted for Google Rich Results.</p>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200 relative group">
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Question #{index + 1}</label>
                            <button
                                onClick={() => removeFAQ(index)}
                                className="text-gray-400 hover:text-red-500 transition-colors p-1"
                                title="Remove FAQ"
                            >
                                <Trash2 size={16} />
                            </button>
                        </div>
                        <input
                            type="text"
                            value={faq.question}
                            onChange={(e) => updateFAQ(index, 'question', e.target.value)}
                            placeholder="e.g. What is the cancellation policy?"
                            className="w-full mb-3 px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        />
                        <textarea
                            value={faq.answer}
                            onChange={(e) => updateFAQ(index, 'answer', e.target.value)}
                            placeholder="Answer goes here..."
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-y"
                        />
                    </div>
                ))}
            </div>

            <button
                type="button"
                onClick={addFAQ}
                className="mt-4 flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm font-semibold"
            >
                <Plus size={16} /> Add FAQ Item
            </button>
        </div>
    );
}
