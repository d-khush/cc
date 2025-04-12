import config from './config.js';

class AdvisorChat {
    constructor() {
        this.chatMessages = document.getElementById('chatMessages');
        this.userInput = document.getElementById('userInput');
        this.sendButton = document.getElementById('sendMessage');
        this.initializeEventListeners();
        this.config = config;
        
        // Initialize with greeting from config
        const initialMessage = document.querySelector('.message.advisor');
        if (initialMessage) {
            initialMessage.textContent = this.config.advisor.greeting;
        }

        this.careerResponses = {
            'job search': {
                category: 'jobSearch',
                response: 'Based on your interest in job opportunities, I recommend:\n1. Building a strong resume\n2. Networking on LinkedIn\n3. Regularly checking job boards in your field\n4. Setting up job alerts\n5. Tailoring applications to each position'
            },
            'career change': {
                category: 'careerPath',
                response: 'When considering a career change, here\'s a structured approach:\n1. Assess your transferable skills\n2. Research growth industries\n3. Consider additional training or certifications\n4. Network with professionals in target field\n5. Create a transition timeline'
            },
            'interview': {
                category: 'interview',
                response: 'For interview preparation:\n1. Research the company thoroughly\n2. Prepare STAR method responses\n3. Practice common questions\n4. Prepare thoughtful questions to ask\n5. Plan your professional attire'
            },
            'resume': {
                category: 'resumeAdvice',
                response: 'To improve your resume:\n1. Highlight achievements with metrics\n2. Use industry-specific keywords\n3. Ensure clean, professional format\n4. Include relevant skills section\n5. Tailor to job descriptions'
            },
            'skills': {
                category: 'skillDevelopment',
                response: 'For skill development:\n1. Identify key industry skills\n2. Take online courses\n3. Earn relevant certifications\n4. Work on practical projects\n5. Join professional communities'
            },
            'networking': {
                category: 'networking',
                response: 'Build your professional network through:\n1. LinkedIn optimization\n2. Industry events participation\n3. Professional associations\n4. Alumni networks\n5. Informational interviews'
            }
        };
    }

    initializeEventListeners() {
        this.sendButton.addEventListener('click', () => this.sendMessage());
        this.userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });
    }

    addMessage(message, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user' : 'advisor'}`;
        messageDiv.innerHTML = message.replace(/\n/g, '<br>');
        this.chatMessages.appendChild(messageDiv);
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }

    async sendMessage() {
        const message = this.userInput.value.trim();
        if (!message) return;

        // Add user message to chat
        this.addMessage(message, true);
        this.userInput.value = '';

        // Disable input while processing
        this.userInput.disabled = true;
        this.sendButton.disabled = true;

        // Simulate thinking delay
        await new Promise(resolve => setTimeout(resolve, this.config.advisor.responseDelay));

        // Generate response based on keywords
        let response = this.generateResponse(message.toLowerCase());

        // Re-enable input
        this.userInput.disabled = false;
        this.sendButton.disabled = false;
        this.userInput.focus();

        this.addMessage(response);
    }
}

    generateResponse(message) {
        // Default response with available categories
        let defaultResponse = `I can help you with these career-related topics:\n`;
        for (const [key, value] of Object.entries(this.config.responseCategories)) {
            defaultResponse += `- ${value}\n`;
        }
        defaultResponse += '\nWhat would you like to know more about?';

        // Check for keyword matches
        for (const [keyword, data] of Object.entries(this.careerResponses)) {
            if (message.includes(keyword)) {
                return data.response;
            }
        }

        return defaultResponse;
    }


// Initialize the chat when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AdvisorChat();
});