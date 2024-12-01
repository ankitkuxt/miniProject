'use client';

// import { MessageCard } from '@/components/MessageCard';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/components/ui/use-toast';
import { Message } from '@/model/User';
import { ApiResponse } from '@/types/ApiResponse';
import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosError } from 'axios';
import { Loader2, RefreshCcw } from 'lucide-react';
import { User } from 'next-auth';
import { useSession } from 'next-auth/react';
import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AcceptMessageSchema } from '@/schemas/acceptMessageSchema';
import { Hero } from '@/components/Hero';

function UserDashboard() {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isSwitchLoading, setIsSwitchLoading] = useState(false);

//   const { toast } = useToast();

//   const handleDeleteMessage = (messageId: string) => {
//     setMessages(messages.filter((message) => message._id !== messageId));
//   };

//   const { data: session } = useSession();

//   const form = useForm({
//     resolver: zodResolver(AcceptMessageSchema),
//   });

//   const { register, watch, setValue } = form;
//   const acceptMessages = watch('acceptMessages');

//   const fetchAcceptMessages = useCallback(async () => {
//     setIsSwitchLoading(true);
//     try {
//       const response = await axios.get<ApiResponse>('/api/accept-messages');
//       setValue('acceptMessages', response.data.isAcceptingMessages);
//     } catch (error) {
//       const axiosError = error as AxiosError<ApiResponse>;
//       toast({
//         title: 'Error',
//         description:
//           axiosError.response?.data.message ??
//           'Failed to fetch message settings',
//         variant: 'destructive',
//       });
//     } finally {
//       setIsSwitchLoading(false);
//     }
//   }, [setValue, toast]);

//   const fetchMessages = useCallback(
//     async (refresh: boolean = false) => {
//       setIsLoading(true);
//       setIsSwitchLoading(false);
//       try {
//         const response = await axios.get<ApiResponse>('/api/get-messages');
//         setMessages(response.data.messages || []);
//         if (refresh) {
//           toast({
//             title: 'Refreshed Messages',
//             description: 'Showing latest messages',
//           });
//         }
//       } catch (error) {
//         const axiosError = error as AxiosError<ApiResponse>;
//         toast({
//           title: 'Error',
//           description:
//             axiosError.response?.data.message ?? 'Failed to fetch messages',
//           variant: 'destructive',
//         });
//       } finally {
//         setIsLoading(false);
//         setIsSwitchLoading(false);
//       }
//     },
//     [setIsLoading, setMessages, toast]
//   );

//   // Fetch initial state from the server
//   useEffect(() => {
//     if (!session || !session.user) return;

//     fetchMessages();

//     fetchAcceptMessages();
//   }, [session, setValue, toast, fetchAcceptMessages, fetchMessages]);

//   // Handle switch change
//   const handleSwitchChange = async () => {
//     try {
//       const response = await axios.post<ApiResponse>('/api/accept-messages', {
//         acceptMessages: !acceptMessages,
//       });
//       setValue('acceptMessages', !acceptMessages);
//       toast({
//         title: response.data.message,
//         variant: 'default',
//       });
//     } catch (error) {
//       const axiosError = error as AxiosError<ApiResponse>;
//       toast({
//         title: 'Error',
//         description:
//           axiosError.response?.data.message ??
//           'Failed to update message settings',
//         variant: 'destructive',
//       });
//     }
//   };

//   if (!session || !session.user) {
//     return <div></div>;
//   }

//   const { username } = session.user as User;

//   const baseUrl = `${window.location.protocol}//${window.location.host}`;
  

  return (
      <Hero />
    );
}

export default UserDashboard;
