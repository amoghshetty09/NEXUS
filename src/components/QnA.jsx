import React, { useState } from 'react';
import AnimationWrapper from './AnimationWrapper';
import { useForm } from 'react-hook-form';

function QnA() {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const [question, setQuestion] = useState("");
    const [email, setEmail] = useState("");

    const onSubmit = async (data) => {
        console.log('Form Data:', data);
        try {
            const result = await fetch('http://localhost:3000/userQ/', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data) 
            });
            const res = await result.text();
            console.log('Response from server:', res);
            
     
            setQuestion("");
            setEmail("");
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <AnimationWrapper>
            <div className="qna-container">
                <h2>Q&A</h2>
                <p>Ask your doubts related to our club and answers will be shared to your e-mail id.</p>
                
                <div className="qna-frame">
                    <form onSubmit={handleSubmit(onSubmit)} className="qna-form">
               
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Ask a question..."
                                className="qna-input"
                                {...register('question', { 
                                    required: "Please enter a question" 
                                })}
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                            />
                            {errors.question && <p className="error">{errors.question.message}</p>}
                        </div>
                        <br />

                        {/* Email Input */}
                        <div className="input-group">
                            <input
                                type="email"
                                placeholder="Enter your email..."
                                className="qna-input"
                                {...register('email', {
                                    required: "Please enter your email",
                                    pattern: {
                                        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                        message: "Please enter a valid email"
                                    }
                                })}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <p className="error">{errors.email.message}</p>}
                        </div>
                        <br />

                    
                        <div className="input-group">
                            <button type="submit" className="qna-submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </AnimationWrapper>
    );
};

export default QnA;
