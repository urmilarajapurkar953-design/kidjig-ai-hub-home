"use client";

import React, { useState } from 'react';

const CodePlayground = () => {
  const [activeTab, setActiveTab] = useState('js');

  const codeSnippets = {
    js: `const axios = require('axios');\n\n// Base URL for all API calls\nconst baseUrl = 'https://api.kidjig.com/provider';\n\n// Example: Chat completion with GPT-3.5\nconst response = await axios.post(\n  \`\${baseUrl}/api/v1/openai/chat/gpt-3.5-turbo\`,\n  {\n    prompt: "What is the capital of France?",\n    stream: false,\n    config: {\n      temperature: 0.7,\n      maxOutputTokens: 4096,\n      topP: 1,\n      topK: 40\n    }\n  },\n  {\n    headers: {\n      'X-Api-Key': 'YOUR_API_KEY',\n      'Content-Type': 'application/json'\n    }\n  }\n);\n\nconsole.log(response.data);`,
    python: `import requests\n\n# Base URL for all API calls\nbase_url = 'https://api.kidjig.com/provider'\n\n# Example: Chat completion with GPT-3.5\nresponse = requests.post(\n    f"{base_url}/api/v1/openai/chat/gpt-3.5-turbo",\n    json={\n        "prompt": "What is the capital of France?",\n        "stream": False,\n        "config": {\n            "temperature": 0.7,\n            "maxOutputTokens": 4096,\n            "topP": 1,\n            "topK": 40\n        }\n    },\n    headers={\n        'X-Api-Key': 'YOUR_API_KEY',\n        'Content-Type': 'application/json'\n    }\n)\n\nprint(response.json())`,
    curl: `curl -X POST 'https://api.kidjig.com/provider/api/v1/openai/chat/gpt-3.5-turbo' \\\n  -H 'X-Api-Key: YOUR_API_KEY' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n    "prompt": "What is the capital of France?",\n    "stream": false,\n    "config": {\n      "temperature": 0.7,\n      "maxOutputTokens": 4096,\n      "topP": 1,\n      "topK": 40\n    }\n  }'`
  };

  return (
    <section className="bg-[#030712] py-24 px-6 relative flex flex-col items-center">
      
      {/* 1. Header Section */}
      <div className="max-w-3xl w-full text-center mb-16 space-y-6">
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
          Make your first <span className="text-indigo-500">API call</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
          Integrate powerful AI into your application with just a few lines of code, 
          using the same API structure you already know.
        </p>
      </div>

      <div className="max-w-5xl w-full space-y-12">
        
        {/* 2. Interactive Terminal (Now First) */}
        <div className="relative">
          {/* Subtle glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl blur-xl"></div>
          
          <div className="relative bg-[#0b0f1a]/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden group">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/5">
              <div className="flex items-center gap-6">
                <div className="flex gap-1.5 mr-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                </div>
                {['js', 'python', 'curl'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-[10px] font-mono tracking-[0.2em] uppercase transition-all duration-300 relative py-1 ${
                      activeTab === tab ? 'text-white' : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    {tab === 'js' ? 'Node.js' : tab === 'python' ? 'Python' : 'cURL'}
                    {activeTab === tab && (
                      <span className="absolute -bottom-[17px] left-0 w-full h-[2px] bg-indigo-500"></span>
                    )}
                  </button>
                ))}
              </div>
              <button 
                onClick={() => navigator.clipboard.writeText(codeSnippets[activeTab])}
                className="text-[10px] text-gray-500 hover:text-white uppercase font-bold tracking-widest transition-colors"
              >
                Copy
              </button>
            </div>

            {/* Code Body */}
            <div className="p-6 md:p-8 overflow-x-auto min-h-[380px]">
              <pre className="font-mono text-sm leading-relaxed">
                <code>
                  {codeSnippets[activeTab].split('\n').map((line, i) => (
                    <div key={i} className="flex hover:bg-white/[0.02] rounded px-2 transition-colors">
                      <span className="w-8 shrink-0 text-gray-800 select-none text-xs">{i + 1}</span>
                      <span className="whitespace-pre">
                        {line.includes('//') || line.includes('#') ? (
                          <span className="text-emerald-500/60 italic">{line}</span>
                        ) : line.includes("'") || line.includes('"') || line.includes('`') ? (
                          <span className="text-amber-200/80">{line}</span>
                        ) : (
                          <span className="text-indigo-300/80">{line}</span>
                        )}
                      </span>
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* 3. Authorization Card (Now at the Bottom) */}
        <div className="w-full bg-[#0b0f1a] border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden transition-all duration-500 hover:border-white/20">
          <div className="relative z-10">
            <h3 className="text-white font-bold text-xl mb-3 tracking-tight">Authorization</h3>
            <p className="text-gray-400 text-sm mb-8 max-w-2xl leading-relaxed">
              To authenticate your requests, you must include your unique API key in the 
              <code className="text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded mx-1">X-Api-Key</code> 
              header. Never share this key in client-side code.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <div className="bg-[#1d4ed8] text-white font-mono text-sm px-5 py-3 rounded-xl flex items-center gap-4 shadow-[0_0_30px_rgba(29,78,216,0.2)] border border-blue-400/20">
                <span className="select-all">X-Api-Key: YOUR_API_KEY</span>
                <button 
                  onClick={() => navigator.clipboard.writeText('X-Api-Key: YOUR_API_KEY')}
                  className="hover:text-blue-200 transition-colors border-l border-white/20 pl-4"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
              
              <span className="text-gray-600 text-[10px] uppercase font-bold tracking-widest">
                Protected by AES-256
              </span>
            </div>
          </div>

          {/* Abstract background accent for the bottom card */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-600/5 rounded-full blur-3xl"></div>
        </div>

      </div>
    </section>
  );
};

export default CodePlayground;