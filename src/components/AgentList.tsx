import React from 'react'
import { Bot, Phone, ToggleLeft, ToggleRight } from 'lucide-react'

interface Agent {
  id: number;
  name: string;
  prompt: string;
  status: 'alive' | 'disabled';
  phoneNumber: string;
}

interface AgentListProps {
  agents: Agent[];
  onMakeCall: (id: number) => void;
  onToggleStatus: (id: number) => void;
}

const AgentList: React.FC<AgentListProps> = ({ agents, onMakeCall, onToggleStatus }) => {
  if (agents.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500 text-xl">No agents created yet. Click "Create Agent" to get started!</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {agents.map((agent) => (
        <div key={agent.id} className="bg-white shadow-md rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Bot className="text-blue-500 mr-2" />
              <h3 className="text-xl font-semibold">{agent.name}</h3>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
              agent.status === 'alive' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
            }`}>
              {agent.status.toUpperCase()}
            </span>
          </div>
          <p className="text-gray-600 mb-2">Phone Number: {agent.phoneNumber}</p>
          <p className="text-gray-600 mb-4">Prompt: {agent.prompt}</p>
          <div className="flex justify-between">
            <button 
              onClick={() => onMakeCall(agent.id)}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center"
              disabled={agent.status === 'disabled'}
            >
              <Phone className="mr-2" /> Make A Call
            </button>
            <button 
              onClick={() => onToggleStatus(agent.id)}
              className={`${
                agent.status === 'alive' ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
              } text-white font-bold py-2 px-4 rounded flex items-center`}
            >
              {agent.status === 'alive' ? <ToggleRight className="mr-2" /> : <ToggleLeft className="mr-2" />}
              {agent.status === 'alive' ? 'Disable Agent' : 'Enable Agent'}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AgentList