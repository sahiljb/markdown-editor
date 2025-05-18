import { readFile } from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'src/data/demo.md');
    const markdown = await readFile(filePath, 'utf8');
    
    return new Response(markdown, {
      headers: {
        'Content-Type': 'text/markdown',
      },
    });
  } catch (error) {
    console.error('Error reading demo markdown file:', error);
    return new Response('# Welcome to Markdown Editor\n\nStart typing here...', {
      status: 200,
      headers: {
        'Content-Type': 'text/markdown',
      },
    });
  }
}