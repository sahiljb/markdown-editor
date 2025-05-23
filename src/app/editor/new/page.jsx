"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { 
  Download, 
  Copy, 
  Trash2,
  Share,
  Share2,
  Save
} from "lucide-react";

export default function NewEditorPage() {
  const [markdown, setMarkdown] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Load the demo markdown file when the component mounts
    const loadDemoMarkdown = async () => {
      try {
        const response = await fetch('/api/demo-markdown');
        if (response.ok) {
          const data = await response.text();
          setMarkdown(data);
        } else {
          // Fallback if API fails
          setMarkdown("# Welcome to Markdown Editor\n\nStart typing here...");
        }
      } catch (error) {
        console.error("Failed to load demo markdown:", error);
        setMarkdown("# Welcome to Markdown Editor\n\nStart typing here...");
      } finally {
        setIsLoading(false);
      }
    };
    
    loadDemoMarkdown();
  }, []);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(markdown);
    toast.success("Copied to clipboard");
  };
  
  const handleClear = () => {
    if (confirm("Are you sure you want to clear all content?")) {
      setMarkdown("");
      toast.success("Content cleared");
    }
  };
  
  const handleExportMarkdown = () => {
    const blob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `document.md`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Exported as Markdown");
  };

  if (isLoading) {
    return (
      <div className="container mx-auto py-6 px-4 md:px-6 flex items-center justify-center min-h-[70vh]">
        <div className="text-center">
          <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
          <p>Loading editor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6 px-4 md:px-6">
      <Card className="border shadow-sm">
        <div className="p-4 border-b flex flex-wrap items-center justify-between gap-2">
          <h1 className="text-xl font-semibold">Markdown Editor</h1>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleCopy} title="Copy to clipboard">
              <Copy className="h-4 w-4" />
            </Button>
            
            <Button variant="outline" size="sm" onClick={handleExportMarkdown} title="Export as Markdown">
              <Download className="h-4 w-4" />
            </Button>

            <Button variant="outline" size="sm" title="Save this" disabled>
              <Save className="h-4 w-4" />
            </Button>

            <Button variant="outline" size="sm" title="Share this markdown" disabled>
              <Share2 className="h-4 w-4" />
            </Button>
            
            <Button variant="destructive" size="sm" onClick={handleClear} title="Clear content">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[70vh]">
          <Textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            className="min-h-[70vh] font-mono text-sm p-4 rounded-none border-0 resize-none focus-visible:-ring-0"
            placeholder="Start typing your markdown here..."
          />
          <div className="min-h-[70vh] overflow-auto border-l">
            <div className="p-6 markdown-preview">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  code({node, inline, className, children, ...props}) {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                      <SyntaxHighlighter
                        style={vscDarkPlus}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  }
                }}
              >
                {markdown}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </Card>
      <Toaster />
    </div>
  );
}

