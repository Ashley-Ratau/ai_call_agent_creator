import React, { useState } from 'react'
import { Bot, Plus } from 'lucide-react'
import AgentCreationForm from './components/AgentCreationForm'
import AgentList from './components/AgentList'

interface Agent {
  id: number;
  name: string;
  prompt: string;
  status: 'alive' | 'disabled';
  phoneNumber: string;
}

function App() {
  const [agents, setAgents] = useState<Agent[]>([])
  const [showForm, setShowForm] = useState(false)
  const [nextId, setNextId] = useState(1)

  const handleCreateAgent = (agent: { name: string; prompt: string }) => {
    const newAgent: Agent = {
      id: nextId,
      ...agent,
      status: 'alive',
      phoneNumber: '087 250 3043',
    }
    setAgents([...agents, newAgent])
    setShowForm(false)
    setNextId(nextId + 1)
  }

  const handleMakeCall = (id: number) => {
    // Implement call functionality here
    console.log(`Making a call with agent ${id}`)
  }

  const handleToggleStatus = (id: number) => {
    setAgents(agents.map(agent => 
      agent.id === id 
        ? { ...agent, status: agent.status === 'alive' ? 'disabled' : 'alive' }
        : agent
    ))
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <Bot className="mr-2" /> AI Call Agent Dashboard
          </h1>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center"
          >
            <Plus className="mr-2" /> Create Agent
          </button>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {showForm ? (
          <AgentCreationForm onCreateAgent={handleCreateAgent} onCancel={() => setShowForm(false)} />
        ) : (
          <AgentList 
            agents={agents} 
            onMakeCall={handleMakeCall} 
            onToggleStatus={handleToggleStatus} 
          />
        )}
      </main>
    </div>
  )
}

export default App