import { Main } from '../../components/Main';
import { Review } from '@calum-business-mono/shared-components/src/lib/ReviewSummary';
import { createClient } from '../../supabase/server';

const LandingPage = async () => {
  const supabase = createClient();
  const { data: reviews } = await supabase.from('reviews').select();
  const formattedReviews: Review[] =
    reviews?.map(({ description, review_date, reviewer, rating }: Review) => ({
      description,
      review_date,
      reviewer,
      rating,
    })) ?? [];
  return <Main reviews={formattedReviews} />;
};

export default LandingPage;
