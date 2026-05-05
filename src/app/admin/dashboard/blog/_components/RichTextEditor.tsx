'use strict';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import TextAlign from '@tiptap/extension-text-align';
import { supabase } from '@/lib/supabaseClient';
import {
    Bold, Italic, List, Link as LinkIcon, Image as ImageIcon,
    Heading1, Heading2, Heading3, Heading4, Heading5, Heading6,
    Quote, AlignLeft, AlignCenter, AlignRight
} from 'lucide-react';
import { toast } from 'sonner';
import styles from '../admin.module.css';

interface RichTextEditorProps {
    content: string;
    onChange: (content: string) => void;
}

export default function RichTextEditor({ content, onChange }: RichTextEditorProps) {
    const editor = useEditor({
        immediatelyRender: false,
        extensions: [
            StarterKit,
            Image,
            Link.configure({
                openOnClick: false,
            }),
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
        ],
        content: content,
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
        editorProps: {
            attributes: {
                class: 'editor-content-area', // We will target :global(.ProseMirror) in css
            },
        },
    });

    if (!editor) {
        return null;
    }

    const addImage = async () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = async () => {
            if (input.files?.length) {
                const file = input.files[0];
                const fileExt = file.name.split('.').pop();
                const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
                const filePath = `${fileName}`;

                const toastId = toast.loading('Uploading image...');

                try {
                    const { error: uploadError } = await supabase.storage
                        .from('blog-images')
                        .upload(filePath, file);

                    if (uploadError) throw uploadError;

                    const { data: { publicUrl } } = supabase.storage
                        .from('blog-images')
                        .getPublicUrl(filePath);

                    editor.chain().focus().setImage({ src: publicUrl }).run();
                    toast.success('Image uploaded', { id: toastId });
                } catch (error: any) {
                    console.error('Error uploading image:', error);
                    toast.error('Failed to upload image', { id: toastId });
                }
            }
        };
        input.click();
    };

    const setLink = () => {
        const previousUrl = editor.getAttributes('link').href;
        const url = window.prompt('URL', previousUrl);

        if (url === null) return;

        if (url === '') {
            editor.chain().focus().extendMarkRange('link').unsetLink().run();
            return;
        }

        editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
    };

    const ToolbarButton = ({ onClick, isActive = false, children, title }: any) => (
        <button
            onClick={(e) => { e.preventDefault(); onClick(); }}
            className={`${styles.toolbarBtn} ${isActive ? styles.toolbarBtnActive : ''}`}
            title={title}
        >
            {children}
        </button>
    );

    return (
        <div className={styles.editorContainer}>
            <div className={styles.toolbar}>
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    isActive={editor.isActive('bold')}
                    title="Bold"
                >
                    <Bold size={18} />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    isActive={editor.isActive('italic')}
                    title="Italic"
                >
                    <Italic size={18} />
                </ToolbarButton>

                <div className={styles.separator} />

                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    isActive={editor.isActive('heading', { level: 1 })}
                    title="Heading 1"
                >
                    <Heading1 size={18} />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    isActive={editor.isActive('heading', { level: 2 })}
                    title="Heading 2"
                >
                    <Heading2 size={18} />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    isActive={editor.isActive('heading', { level: 3 })}
                    title="Heading 3"
                >
                    <Heading3 size={18} />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                    isActive={editor.isActive('heading', { level: 4 })}
                    title="Heading 4"
                >
                    <Heading4 size={18} />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
                    isActive={editor.isActive('heading', { level: 5 })}
                    title="Heading 5"
                >
                    <Heading5 size={18} />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
                    isActive={editor.isActive('heading', { level: 6 })}
                    title="Heading 6"
                >
                    <Heading6 size={18} />
                </ToolbarButton>

                <div className={styles.separator} />

                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    isActive={editor.isActive('bulletList')}
                    title="Bullet List"
                >
                    <List size={18} />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    isActive={editor.isActive('blockquote')}
                    title="Quote"
                >
                    <Quote size={18} />
                </ToolbarButton>

                <div className={styles.separator} />

                <ToolbarButton
                    onClick={() => editor.chain().focus().setTextAlign('left').run()}
                    isActive={editor.isActive({ textAlign: 'left' })}
                    title="Align Left"
                >
                    <AlignLeft size={18} />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().setTextAlign('center').run()}
                    isActive={editor.isActive({ textAlign: 'center' })}
                    title="Align Center"
                >
                    <AlignCenter size={18} />
                </ToolbarButton>
                <ToolbarButton
                    onClick={() => editor.chain().focus().setTextAlign('right').run()}
                    isActive={editor.isActive({ textAlign: 'right' })}
                    title="Align Right"
                >
                    <AlignRight size={18} />
                </ToolbarButton>

                <div className={styles.separator} />

                <ToolbarButton onClick={setLink} isActive={editor.isActive('link')} title="Link">
                    <LinkIcon size={18} />
                </ToolbarButton>
                <ToolbarButton onClick={addImage} title="Upload Image">
                    <ImageIcon size={18} />
                </ToolbarButton>
            </div>
            <div className={styles.editorContent}>
                <EditorContent editor={editor} />
            </div>
        </div>
    );
}
