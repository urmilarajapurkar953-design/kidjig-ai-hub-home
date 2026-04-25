"use client";

import React, { useState } from 'react';

const CodePlayground = () => {
  const [activeTab, setActiveTab] = useState('js');
  const [copied, setCopied] = useState(false); // new state

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); // reset after 1.5s
  };

  const codeSnippets = {
    js: `const axios = require('axios');\n\nconst baseUrl = 'https://api.kidjig.com/provider';\n\nconst response = await axios.post(\n  \`\${baseUrl}/api/v1/openai/chat/gpt-3.5-turbo\`,\n  {\n    prompt: "What is the capital of France?",\n    stream: false,\n    config: {\n      temperature: 0.7,\n      maxOutputTokens: 4096,\n      topP: 1,\n      topK: 40\n    }\n  },\n  {\n    headers: {\n      'X-Api-Key': 'YOUR_API_KEY',\n      'Content-Type': 'application/json'\n    }\n  }\n);\n\nconsole.log(response.data);`,
    python: `import requests\n\nbase_url = 'https://api.kidjig.com/provider'\n\nresponse = requests.post(\n    f"{base_url}/api/v1/openai/chat/gpt-3.5-turbo",\n    json={\n        "prompt": "What is the capital of France?",\n        "stream": False,\n        "config": {\n            "temperature": 0.7,\n            "maxOutputTokens": 4096,\n            "topP": 1,\n            "topK": 40\n        }\n    },\n    headers={\n        'X-Api-Key': 'YOUR_API_KEY',\n        'Content-Type': 'application/json'\n    }\n)\n\nprint(response.json())`,
    curl: `curl -X POST 'https://api.kidjig.com/provider/api/v1/openai/chat/gpt-3.5-turbo' \\\n  -H 'X-Api-Key: YOUR_API_KEY' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n    "prompt": "What is the capital of France?",\n    "stream": false,\n    "config": {\n      "temperature": 0.7,\n      "maxOutputTokens": 4096,\n      "topP": 1,\n      "topK": 40\n    }\n  }'`
  };

  return (
    <section className="bg-[#030712] py-24 px-6 relative flex flex-col items-center">
      
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
        
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl blur-xl"></div>
          
          <div className="relative bg-[#0b0f1a]/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden group">
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
                onClick={handleCopy}
                className="text-[10px] text-gray-500 hover:text-white uppercase font-bold tracking-widest transition-colors"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>

            <div className="p-6 md:p-8 overflow-x-auto min-h-[380px]">
              <pre className="font-mono text-sm leading-relaxed">
                <code>
                  {codeSnippets[activeTab].split('\n').map((line, i) => (
                    <div key={i} className="flex hover:bg-white/[0.02] rounded px-2 transition-colors">
                      <span className="w-8 shrink-0 text-gray-700 select-none text-xs">{i + 1}</span>
                      <span className="whitespace-pre">
                        {line.includes("'") || line.includes('"') || line.includes('`') ? (
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

      </div>
    </section>
  );
};

export default CodePlayground;
