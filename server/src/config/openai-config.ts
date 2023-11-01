import { Configuration } from "openai";

//Setting up openAI API configuration
export const configureOpenAI = () => {
    const config = new Configuration({
        apiKey: process.env.OPEN_AI_SECRET,
        organization: process.env.OPENAI_ORGANIZATION_ID,
    });
    return config;
};