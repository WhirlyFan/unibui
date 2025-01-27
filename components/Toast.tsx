import { ToastActionElement, ToastProps } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";

export interface ToastInterface extends ToastProps {
  buttonText: string;
  description: string;
  title?: string;
  action?: ToastActionElement;
}

export function Toast({
  buttonText,
  description,
  title,
  action,
}: ToastInterface) {
  const { toast } = useToast();
  return (
    <div
      className='w-full h-full cursor-pointer'
      onClick={() => {
        toast({
          title: title,
          description: description,
          action: action,
        });
      }}
    >
      {buttonText}
    </div>
  );
}
