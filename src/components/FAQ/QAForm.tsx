// import React, { useState, useCallback } from 'react';
// import { Send } from 'lucide-react';

// function App() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     question: ''
//   });

//   const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   }, []);

//   const handleSubmit = useCallback((e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     setFormData({
//       name: '',
//       email: '',
//       question: ''
//     });
//   }, [formData]);

//   return (
//     <div className="min-h-screen bg-gray-900 flex items-start justify-center p-4"> {/* Changed justify-center to items-start */}
//       <div className="w-full max-w-md rounded-xl bg-gradient-to-r p-[1px] from-cyan-500/20 to-purple-500/20">
//         <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6">
//           <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-6">
//             Ask a Question
//           </h3>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
//                 Name
//               </label>
//               <input
//                 id="name"
//                 name="name"
//                 type="text"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg 
//                           focus:ring-2 focus:ring-cyan-500 focus:border-transparent 
//                           transition-colors text-white outline-none
//                           hover:border-gray-600 focus:outline-none"
//                 spellCheck="false"
//                 autoComplete="off"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
//                 Email
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg 
//                           focus:ring-2 focus:ring-cyan-500 focus:border-transparent 
//                           transition-colors text-white outline-none
//                           hover:border-gray-600 focus:outline-none"
//                 spellCheck="false"
//                 autoComplete="email"
//               />
//             </div>

//             <div>
//               <label htmlFor="question" className="block text-sm font-medium text-gray-300 mb-1">
//                 Your Question
//               </label>
//               <textarea
//                 id="question"
//                 name="question"
//                 value={formData.question}
//                 onChange={handleChange}
//                 required
//                 rows={4}
//                 className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg 
//                           focus:ring-2 focus:ring-cyan-500 focus:border-transparent 
//                           transition-colors text-white outline-none
//                           hover:border-gray-600 focus:outline-none resize-none"
//                 spellCheck="true"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 
//                        text-white font-medium rounded-lg 
//                        hover:from-cyan-600 hover:to-purple-600 
//                        transition-all duration-300
//                        flex items-center justify-center gap-2 group
//                        transform hover:scale-[1.02] active:scale-[0.98]"
//             >
//               <span>Submit Form</span>
//               <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


import React from "react";

interface ContactFormProps {
  onClose: () => void; // Define the expected prop
}

const QAForm: React.FC<ContactFormProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              rows={4}
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QAForm;

