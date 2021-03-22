import React from 'react';
import Ad from '../../components/LiveCourseDetails/Ad/Ad';
import Tab from '../../components/LiveCourseDetails/Tabs/Tabs';

const LiveCourseDetails = () => {
  const courseDetails = {
    price: 0,
    instructor: {
      name: 'Pragya Bajrachraya',
      occupation: 'Make-up Expert',
      image:
        'https://s3-alpha-sig.figma.com/img/5e7a/15af/28b9e8d53d48a1483609fa4b2f15c895?Expires=1616976000&Signature=Eb84WXw6nUHAewWpCsUXGIuQoKcqJdajlgcZuQSAEk2Gs1MQ0ygLS5NSURxNb~fEftn-zTu6hshMWSjhfqOuT7QqT0U9P5JRmoBF75B~WTEpVH7mDvgWGbG3pTVEZm8PFVKLMFFRC48~fgIjnJGJHSAwYrJBe58gc0i6Snc0yDYVv9o3xGoUBlRWCa3jgI5~A4MYK05Mckt0ONK1XpIedxHcxQAU2hKGZLwaBe8pmPUWNJ2ATaF2kQQUE0viw6lQwwOenfAEpl5DwTwepwVfgwycjCG~LndUYx5iKATw9F~htwMCAZWMf~xeKL6cnBwTxibSs1yPoJQjeNMwfFfUSg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      intro:
        'This comprehensive course will be your guide to learning how to use the power of Python to analyze data, create beautiful visualizations, and use powerful machine learning algorithms! Data Scientist has been ranked the number one job on Glassdoor and the average salary of a data scientist.',
      totalStudentsEnrolled: '564',
      ratings: '4.5',
      reviews: [
        {
          id: 1,
          image:
            'https://s3-alpha-sig.figma.com/img/5dfa/a296/b9f2db5ec72e31b1515257953a76eb2e?Expires=1616976000&Signature=T86TBBp-i7uB52TWKaFGZT6El6XDruccGkeJJvisU1tJdTIFTQPtUcfGV0Nx4d6z4NFtmITyRk70xzebnuWzWTB7BVOpGl4kd2KW-Y9Imn15Z5K~tTqRl440PRNDqQwdbxGUGKzRbKw3BhPG9pufDUGVgl4nLfIrQplT~MblEo2IM4NkEtha~8GX8w8XNqb1B6s73Ha55WxLSwVc~XcwKEu0E9EAyAcg5SP6RypF1n50gdVjRYrzcm9PqjahqcG2-~THh0-glgYzx2HwUPKZPkn~36eqM0ceQ6C14ssJNZWWxobPXTMlkzt50tCdWUONifoc3dzfiQ7CSaqccfD22w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
          name: 'sweta patra',
          rating: '0.5',
          createdAt: '2021-01-10',
          comment:
            "I would suggest everyone to enroll in this course. It's nicely explained in a simple and understandable way. Every concept is taught effectively.",
        },
        {
          id: 2,
          image:
            'https://s3-alpha-sig.figma.com/img/5dfa/a296/b9f2db5ec72e31b1515257953a76eb2e?Expires=1616976000&Signature=T86TBBp-i7uB52TWKaFGZT6El6XDruccGkeJJvisU1tJdTIFTQPtUcfGV0Nx4d6z4NFtmITyRk70xzebnuWzWTB7BVOpGl4kd2KW-Y9Imn15Z5K~tTqRl440PRNDqQwdbxGUGKzRbKw3BhPG9pufDUGVgl4nLfIrQplT~MblEo2IM4NkEtha~8GX8w8XNqb1B6s73Ha55WxLSwVc~XcwKEu0E9EAyAcg5SP6RypF1n50gdVjRYrzcm9PqjahqcG2-~THh0-glgYzx2HwUPKZPkn~36eqM0ceQ6C14ssJNZWWxobPXTMlkzt50tCdWUONifoc3dzfiQ7CSaqccfD22w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
          name: 'sweta patra',
          rating: '4.5',
          createdAt: '2021-01-10',
          comment:
            "I would suggest everyone to enroll in this course. It's nicely explained in a simple and understandable way. Every concept is taught effectively.",
        },
      ],
    },
    duration: '15',
    lectures: '24',
    enrolled: '629',
    language: 'english',
    deadline: '05 Mar 2021',
    // description:
    skills: [
      { list: 'Over 12 lectures and 25 hours of content!' },
      { list: 'LIVE PROJECT End to End Software Testing Training Included.' },
    ],
    requirements: [
      {
        list:
          'Best suitable for beginners to advanced level users and who learn faster when demonstrated.',
      },
      {
        list:
          'Best suitable for beginners to advanced level users and who learn faster when demonstrated.',
      },
    ],
    videoUrl:
      'https://s3-alpha-sig.figma.com/img/4d74/abc3/28ddd731e2a92df687f6bfbcfa4bbaa3?Expires=1616976000&Signature=MQr23Cvr-5wguntUFtdhZtmYc6pXhoiKKAqVlz8cJx2VwkZCyBeoUQMkzx54kWE8Oktt5vq-bbTp-iUC~nDWCjeOn5X4tfT3qknvz6vyEaTlXF28bEhm3UEQbk3AER3T9eIuEmNTViacQx111~FJqCAel5GdsV5UZTOxN5TE7Q~7gZhibV-V6D~2Gsl9Kyr8o8xDO~MpNALN6iBGqCfgMhkCUWF9ITy-TiqQRTH-SvY3TGkzGWP0vRkZt-fFzZ6CwFifKxDFk8CiyJ6gbVuUGkaMO142I5d2JNWniCwI4Ev6YuuZp4riC09-64CHJ1gN0QVw76ek6X3~e~Gg1u-6VQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    previewUrl:
      'https://s3-alpha-sig.figma.com/img/ab0d/f045/03f58467854fa0f631e0ef4c95294221?Expires=1616976000&Signature=VOVMWpLyATOYJd8bRpFC-HaQwPdpNAMvRfy63BEaQ1ewLZeG~TYRwyR-gKpCaDu9~BPwDTSrJpr3LpqX51xELZrqvaXLJRt9aG5Nn2tCqlkNVip2cC3utxu2EeNzHU3jS8dRxkH151jfVeb1CyE0eaRTlS8He5vxD0VgXsW2KvO0af4rAosf9eO9liJgBbI3I4PLmafeauMY8CmT4TTyWPE53UqPwwy7UgDB8LMDhAdibxzEJQeKwyKVW5Nx4tQVNJS3cMp5p5of1nPQH3QOKZ8FT9Eves~IfgKYFLhYgNac1jUkNDEaXAWyUB-wlD2XQ8PuJU2SLU-4Dx2lYY0~0A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
  };
  return (
    <div>
      <Ad />
      <Tab courseDetails={courseDetails} />
    </div>
  );
};

export default LiveCourseDetails;
