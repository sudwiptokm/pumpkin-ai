import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const pusherServer = {};
//  new PusherServer({
//   appId: process.env.NEXT_PUBLIC_PUSHER_APP_ID as string,
//   key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY as string,
//   secret: process.env.NEXT_PUBLIC_PUSHER_APP_SECRET as string,
//   cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER as string,
//   useTLS: true,
// });

export const pusherClient = {};
//  new PusherClient(
//   process.env.NEXT_PUBLIC_PUSHER_APP_KEY as string,
//   {
//     cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTOR as string,
//   }
// );

export const extractUUIDFromString = (url: string) => {
  return url.match(
    /^[0-9a-f]{8}-?[0-9a-f]{4}-?[1-5][0-9a-f]{3}-?[89ab][0-9a-f]{3}-?[0-9a-f]{12}$/i
  );
};

export const extractURLfromString = (url: string) => {
  return url.match(/https?:\/\/[^\s"<>]+/);
};

export const extractEmailsFromString = (text: string) => {
  return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
};

export const postToParent = (message: string) => {
  window.parent.postMessage(message, "*");
};

export const getMonthName = (month: number) => {
  return month == 1
    ? "Jan"
    : month == 2
    ? "Feb"
    : month == 3
    ? "Mar"
    : month == 4
    ? "Apr"
    : month == 5
    ? "May"
    : month == 6
    ? "Jun"
    : month == 7
    ? "Jul"
    : month == 8
    ? "Aug"
    : month == 9
    ? "Sep"
    : month == 10
    ? "Oct"
    : month == 11
    ? "Nov"
    : month == 12 && "Dec";
};

export function capitalizeFirstLetter(word: string): string {
  if (!word) return word;
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export const formatTime = (date: Date): string => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedHours = hours % 12 || 12; // Adjust hours to 12-hour format
  const period = hours >= 12 ? "pm" : "am";

  return `${String(formattedHours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )} ${period}`;
};
