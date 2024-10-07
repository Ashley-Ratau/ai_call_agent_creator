import React, { useState } from 'react'
import { X } from 'lucide-react'

interface AgentCreationFormProps {
  onCreateAgent: (agent: { name: string; prompt: string }) => void
  onCancel: () => void
}

const AgentCreationForm: React.FC<AgentCreationFormProps> = ({ onCreateAgent, onCancel }) => {
  const [name, setName] = useState('')
  const [prompt, setPrompt] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && prompt) {
      onCreateAgent({ name, prompt })
    }
  }

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Create New Agent</h2>
        <button onClick={onCancel} className="text-gray-500 hover:text-gray-700">
          <X />
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Agent Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter agent name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="prompt">
            Custom Prompt
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="prompt"
            placeholder="Enter custom prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={4}
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create Agent
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default AgentCreationForm