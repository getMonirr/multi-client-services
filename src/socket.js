import { io } from 'socket.io-client';

export const initSocket = async () => {
    try {
        const options = {
            'force new connection': true,
            reconnectionAttempt: 'Infinity',
            timeout: 10000,
            transports: ['websocket'],
        };
        const socket = io('http://localhost:5000', options);
        return socket;
    } catch (error) {
        console.error('Socket initialization error:', error);
        throw error;
    }
};