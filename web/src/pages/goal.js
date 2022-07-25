import React from 'react';
import PageSpace from '../components/PageSpace';
import ParagraphText from '../components/typography/ParagraphText';
import { SectionTitle } from '../components/typography/Title';

function goal() {
  return (
    <PageSpace>
      <div className="container">
        <goalStyles>
          <SectionTitle className="title">Our Goal</SectionTitle>
          <ParagraphText className="goal-text">
            যেমন আমরা সকলেই জানি, আমরা আজ ডিজিটাল যুগে বসবাস করছি, যেখানে আমরা
            প্রয়োজনের তুলনায় বেশি ব্যস্ত। আর এই ব্যস্ততার ফলে আমরা নিজেকে সময়
            দিতে বা নিজের উন্নতি করার সময় দিতে পারি না, এবং আমরা সকলেই জানি
            জ্ঞান ছাড়া উন্নতি করা সম্ভব নয়। কিন্তু আমরা জ্ঞান অর্জনের জন্য কিছুই
            করতে পারি না, অথচ ঘন্টার পর ঘন্টা মোবাইল বা কম্পিউটারে দিয়ে সময়
            অতিক্রম করতে পারি। এছাড়া আমাদের প্রজন্ম যে বই ছেড়ে ইন্টারনেট মুখী
            হচ্ছে একথা সকলের জানা, এর কারণ অনেক কিছুই আছে, কিন্তু প্রধান
            কারনগুলি হল ভাষা বুঝতে সমস্যা হওয়া, বই পড়তে অধিক সময় প্রয়োজন, এবং বই
            এর মূল্য। তাই, আমাদের উদ্দেশ্য এবং প্রচেষ্টা হলো, এই ডিজিটাল যুগে
            সকলকে বইমুখি করে তোলার জন্য এবং বইপড়া কে সহজ করে তোলার উদ্দেশ্যে
            যথাসম্ভব সরল এবং সহজ ভাষায় বিভিন্ন বই এর বোধগম্য সারাংশ মাতৃভাষায়
            তৈরি করে পাঠকের কাছে পৌঁছে দেওয়া এবং প্রজন্মকে সঠিক অর্থে জ্ঞান
            সমৃদ্ধ করাই আমাদের উদ্দেশ্য।
          </ParagraphText>
        </goalStyles>
      </div>
    </PageSpace>
  );
}

export default goal;
