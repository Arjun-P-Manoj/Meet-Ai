import { ResponsiveDialog } from "@/components/responsive-dialog";

interface NewMeetingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const  NewMeetingDialog = ({
  open,
  onOpenChange,
}: NewMeetingDialogProps) => {
  return (
    <ResponsiveDialog
      title="New Meeting"
      description="Create a New Meeting"
      open={open}
      onOpenChange={onOpenChange}
    >
      Meeting
    </ResponsiveDialog>
  );
};
