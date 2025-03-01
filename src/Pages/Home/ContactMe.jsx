import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function ContactMe() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_uewlftb', 'template_8gp0fkp', form.current, 'dA-eN06C0qcM-Ftso')
            .then((result) => {
                console.log(result.text);
                alert("Message sent successfully!");
            }, (error) => {
                console.log(error.text);
                alert("An error occurred. Please try again.");
            });

        e.target.reset();
    };

    return (
        <section id="Contact" className="contact--section">
            <div>
                <p className="sub--title">Get In Touch</p>
                <h2>Contact Me</h2>
                <p className="test-lg">
                    
                </p>
            </div>
            <form ref={form} onSubmit={sendEmail} className="contact--form--container">
                <div className="container">
                    <label htmlFor="first-name" className="contact--label">
                        <span className="text-md">First Name</span>
                        <input
                            type="text"
                            className="contact--input text-md"
                            name="first-name"
                            id="first-name"
                            required
                        />
                    </label>
                    <label htmlFor="last-name" className="contact--label">
                        <span className="text-md">Last Name</span>
                        <input
                            type="text"
                            className="contact--input text-md"
                            name="last-name"
                            id="last-name"
                            required
                        />
                    </label>
                    <label htmlFor="email" className="contact--label">
                        <span className="text-md">Email</span>
                        <input
                            type="email"
                            className="contact--input text-md"
                            name="email"
                            id="email"
                            required
                        />
                    </label>
                    <label htmlFor="phone-number" className="contact--label">
                        <span className="text-md">Phone Number</span>
                        <input
                            type="tel"
                            className="contact--input text-md"
                            name="phone-number"
                            id="phone-number"
                            required
                        />
                    </label>
                </div>
                <label htmlFor="choose-topic" className="contact--label">
                    <span className="text-md">Choose a topic</span>
                    <select id="choose-topic" className="contact--input" name="choose-topic">
                        <option value="">Select One...</option>
                        <option value="Project Inquiry">Project Inquiry</option>
                        <option value="Job Opportunity">Job Opportunity</option>
                        <option value="General Question">General Question</option>
                    </select>
                </label>
                <label htmlFor="message" className="contact--label">
                    <span className="text-md">Message</span>
                    <textarea
                        className="contact--input text-md"
                        name="message"
                        id="message"
                        rows="8"
                        placeholder="Type your message..."
                        required
                    />
                </label>
                <label htmlFor="checkbox" className="checkbox--label">
                    <input type="checkbox" required name="checkbox" id="checkbox" />
                    <span className="text-sm">I accept the terms</span>
                </label>
                <div>
                    <button type="submit" className="btn btn-primary contact--form--btn">Submit</button>
                </div>
            </form>
        </section>
    );
}
