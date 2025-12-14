# Chatbot Setup Guide

This guide explains how to set up the LLM-powered chatbot for the TerraTech web interface.

## Features

- **LLM Integration**: Uses OpenAI (ChatGPT) or Google Gemini for intelligent responses
- **RAG (Retrieval Augmented Generation)**: Extracts relevant context from the knowledge base
- **Multilingual Support**: Responds in English or Vietnamese based on user preference
- **Fallback Mode**: Works without API keys using simple rule-based responses

## Installation

### Option 1: OpenAI (ChatGPT)

1. Install the OpenAI library:
```bash
pip install openai
```

2. Get your API key from [OpenAI Platform](https://platform.openai.com/api-keys)

3. Set the environment variable:
```bash
export OPENAI_API_KEY="your-api-key-here"
export LLM_PROVIDER="openai"  # Optional, defaults to 'openai'
```

### Option 2: Google Gemini

1. Install the Google Generative AI library:
```bash
pip install google-generativeai
```

2. Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey)

3. Set the environment variable:
```bash
export GEMINI_API_KEY="your-api-key-here"
export LLM_PROVIDER="gemini"
```

## Usage

### Running with API Keys

Start the server with your API key set:

```bash
export OPENAI_API_KEY="your-key-here"
cfweb
```

Or for Gemini:

```bash
export GEMINI_API_KEY="your-key-here"
export LLM_PROVIDER="gemini"
cfweb
```

### Running without API Keys

The chatbot will still work using fallback responses, but won't have access to the full knowledge base or advanced reasoning.

## How It Works

1. **Knowledge Base Loading**: The system loads `src/cfweb/static/knowledges/data.md` at startup
2. **Context Extraction**: When a user asks a question, relevant sections are extracted from the knowledge base using keyword matching
3. **LLM Query**: The extracted context, along with web page information, is sent to the LLM API
4. **Response Generation**: The LLM generates a contextual response in the user's preferred language

## Knowledge Base

The knowledge base (`data.md`) contains:
- Company introduction and mission
- Basic aerodynamics concepts
- Aerodynamics formulas
- Exercises and examples
- Product information

The system automatically extracts relevant sections based on the user's query.

## API Endpoint

The chatbot endpoint is available at:

```
POST /api/chatbot
Content-Type: application/json

{
    "message": "What is TerraDrone?",
    "language": "en"  // or "vi"
}
```

Response:
```json
{
    "status": "success",
    "response": "TerraDrone is a self-assembly nano quadcopter..."
}
```

## Troubleshooting

### "OpenAI library not installed"
- Install with: `pip install openai`

### "Gemini library not installed"
- Install with: `pip install google-generativeai`

### "Knowledge base not found"
- Ensure `src/cfweb/static/knowledges/data.md` exists
- Check file permissions

### API Errors
- Verify your API key is correct
- Check your API quota/limits
- Ensure you have internet connectivity

## Security Notes

- Never commit API keys to version control
- Use environment variables or secure secret management
- Consider rate limiting for production deployments
- Monitor API usage to avoid unexpected costs

