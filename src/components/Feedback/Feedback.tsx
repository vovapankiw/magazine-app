import { Paper, Box, styled, Typography, Rating, IconButton, Link } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { Feedback as IFeedback } from '@/types';

interface FeedbackProps {
  feedback: IFeedback;
}

const Wrapper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: '10px'
}));

export const Feedback = ({ feedback }: FeedbackProps) => (
  <Box mt={2}>
    <Wrapper elevation={0}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: '10px'
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="subtitle2">{feedback.name}</Typography>
          <Typography variant="caption" color="#5B636F">
            {feedback.date}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'end' }}>
          <Rating name="read-only" value={feedback.rate} readOnly size="small" />
          <Typography component="legend" variant="caption">
            {feedback.rate} star(s)
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography variant="subtitle2">{feedback.title}</Typography>
        <Typography variant="body2">{feedback.description}</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: ' space-between'
        }}
      >
        <Link href="/not-implemented" underline="none">
          <Typography variant="subtitle2" color="#5B636F">
            Read magazine
          </Typography>
        </Link>
        <Box>
          <IconButton aria-label="up">
            <ThumbDownOffAltIcon />
          </IconButton>
          <IconButton aria-label="down">
            <ThumbUpOffAltIcon />
          </IconButton>
        </Box>
      </Box>
    </Wrapper>
  </Box>
);
