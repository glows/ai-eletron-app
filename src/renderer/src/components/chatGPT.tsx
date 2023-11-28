import React, { useState } from 'react'
import { ModeToggle } from './mode-toggle'
interface Message {
  type: 'user' | 'ai'
  text: string
}

function ChatApp(): JSX.Element {
  const [userInput, setUserInput] = useState<string>('')
  const [chatHistory, setChatHistory] = useState<Message[]>([])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value)
  }

  const handleSendMessage = () => {
    const userMessage = userInput
    // 在chatHistory中添加用户的消息
    setChatHistory((prevChatHistory) => [...prevChatHistory, { type: 'user', text: userMessage }])
    setUserInput('')

    // 调用AI模型生成回复（这里只是示例）
    const aiResponse = 'This is a sample response.'
    // 在chatHistory中添加AI的回复
    setChatHistory((prevChatHistory) => [...prevChatHistory, { type: 'ai', text: aiResponse }])
  }

  return (
    <div>
      <div className="flex flex-col h-screen">

        <ModeToggle />
        {/* <!-- Chat header --> */}
        <div className="p-4 shadow-md">
          <h1 className="text-lg font-bold">Chat</h1>
        </div>

        {/* <!-- Messages container --> */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* <!-- Each message --> */}
          <div className="bg-white p-3 rounded shadow">
            <p>User: Share with me your darkest secret.</p>
          </div>
          <div className="bg-gray-100 p-3 rounded shadow text-gray-800">
            <p>Virtual Sweetheart: Oh, you're really going for the deep stuff, aren't you?</p>
          </div>
          {/* <!-- ... more messages --> */}
        </div>

        {/* <!-- Input area --> */}
        <form className="p-4 shadow-md">
          <input
            type="text"
            placeholder="Type a message..."
            className="w-full p-3 rounded border focus:ring-2 focus:ring-blue-500"
          />
        </form>
      </div>
    </div>
  )
}

export default ChatApp
