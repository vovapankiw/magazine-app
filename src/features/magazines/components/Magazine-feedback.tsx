import { Button, Rating, Typography, Box } from '@mui/material';
import { Feedback as IFeedback } from '@/types';
import { Feedback } from '@/components/Feedback';

type MagazineFeedbackProps = {
  feedbackList: IFeedback[];
};

export const MagazineFeedback = ({ feedbackList }: MagazineFeedbackProps) => (
  <>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
      <Typography>Feedback</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Rating name="read-only" value={5} readOnly size="small" />
        <Typography component="legend">2 fedback(s)</Typography>
      </Box>
    </Box>
    <Button fullWidth variant="outlined">
      Give a feedback
    </Button>
    {feedbackList.map((feedback) => (
      <Feedback feedback={feedback} />
    ))}
  </>
);
