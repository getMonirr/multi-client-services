"use client"
import React, { useState } from 'react';

interface GigFormProps {
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  serviceName: string;
  skills: string[];
  basicPrice: string;
  advancePrice: string;
  premiumPrice: string;
}

const GigForm: React.FC<GigFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    serviceName: '',
    skills: [],
    basicPrice: '',
    advancePrice: '',
    premiumPrice: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const skill = e.target.value;
    if (!formData.skills.includes(skill)) {
      setFormData((prevData) => ({
        ...prevData,
        skills: [...prevData.skills, skill],
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className='min-h-screen w-full items-center flex justify-center'>
        <form onSubmit={handleSubmit} className="p-6 w-1/2 bg-white">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="serviceName">
          Service Name
        </label>
        <input
          className="w-full p-2 border rounded shadow-inner focus:outline-none focus:ring focus:border-blue-300"
          type="text"
          id="serviceName"
          name="serviceName"
          value={formData.serviceName}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="serviceName">
          Technology
        </label>
        <input
          className="w-full p-2 border rounded shadow-inner focus:outline-none focus:ring focus:border-blue-300"
          type="text"
          id="serviceName"
          name="serviceName"
          value={formData.serviceName}
          onChange={handleInputChange}
        />

      </div>

      <div className='mb-4'>

      <label className="block text-gray-700 font-bold mb-2" htmlFor="serviceName">
          Basic
        </label>
        
        <textarea
          className="w-full p-2 border rounded shadow-inner focus:outline-none focus:ring focus:border-blue-300"
          name="message"
          
        //   rows={4}
        />
            <input
            className="w-1/2 p-2 border rounded shadow-inner focus:outline-none focus:ring focus:border-blue-300"
            type="price"
            id="basic"
            name="basic"
            placeholder='basic price'
            
            />
      </div>

      <div className='mb-4'>

      <label className="block text-gray-700 font-bold mb-2" htmlFor="serviceName">
          Advance
        </label>
        
        <textarea
          className="w-full p-2 border rounded shadow-inner focus:outline-none focus:ring focus:border-blue-300"
          name="message"
          
        //   rows={4}
        />
            <input
            className="w-1/2 p-2 border rounded shadow-inner focus:outline-none focus:ring focus:border-blue-300"
            type="price"
            id="basic"
            name="basic"
            placeholder='advance price'
            
            />
      </div>

      <div className='mb-4'>

      <label className="block text-gray-700 font-bold mb-2" htmlFor="serviceName">
          Premium
        </label>
        
        <textarea
          className="w-full p-2 border rounded shadow-inner focus:outline-none focus:ring focus:border-blue-300"
          name="message"
          
        //   rows={4}
        />
            <input
            className="w-1/2 p-2 border rounded shadow-inner focus:outline-none focus:ring focus:border-blue-300"
            type="price"
            id="basic"
            name="basic"
            placeholder='premium price'
            
            />
      </div>

      <div className='mb-4'>
      <label className="block text-gray-700 font-bold mb-2" htmlFor="serviceName">
          Banner
        </label>
        <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
      </div>


      <button
        type="submit"
        className="bg-multi-secondary text-white font-semibold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
    </div>
  );
};

export default GigForm;
