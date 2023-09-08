import { Button, Rating, Typography, Box, styled } from '@mui/material';
import { Feedback as IFeedback } from '@/types';
import { Feedback } from '@/components/Feedback';

const FeedbackTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary
}));

const FeedbackLegend = styled('legend')(({ theme }) => ({
  color: theme.palette.text.secondary
}));

type MagazineFeedbackProps = {
  feedbackList: IFeedback[];
};

export const MagazineFeedback = ({ feedbackList }: MagazineFeedbackProps) => (
  <>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
      <FeedbackTitle variant="h6">Feedback</FeedbackTitle>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Rating name="read-only" value={5} readOnly size="small" />
        <FeedbackLegend>2 fedback(s)</FeedbackLegend>
      </Box>
    </Box>
    <Button fullWidth variant="outlined" color="info">
      Give a feedback
    </Button>
    {feedbackList.map((feedback) => (
      <Feedback feedback={feedback} />
    ))}
  </>
);
