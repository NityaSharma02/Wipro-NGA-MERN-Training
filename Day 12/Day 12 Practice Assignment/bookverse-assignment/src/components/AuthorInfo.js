import React, { Component } from "react";

// kept your original author lists and descriptions
const topBooksByAuthor = {
  "James Clear": ["Atomic Habits", "Atomic Habits Workbook", "Mini Habits"],
  "Héctor García": ["Ikigai", "Ikigai for Teens", "The Little Book of Ikigai"],
  "Paulo Coelho": ["The Alchemist", "Brida", "Eleven Minutes"],
  "Cal Newport": ["Deep Work", "So Good They Can't Ignore You", "Digital Minimalism"],
  "Jay Shetty": ["Think Like a Monk", "Life Lessons from a Monk", "8 Rules of Life"],
  "Robin Sharma": ["The 5 AM Club", "The Monk Who Sold His Ferrari", "Lead Without a Title"],
  "Yuval Noah Harari": ["Sapiens", "Homo Deus", "21 Lessons for the 21st Century"],
  "Ankur Warikoo": ["Do Epic Shit", "Get Epic Shit Done", "Life Lessons"],
  "Jason Fried": ["Rework", "Remote", "It Doesn’t Have to Be Crazy at Work"],
  "Nir Eyal": ["Hooked", "Indistractable", "Hooked Workbook"],
  "Mark Manson": ["The Subtle Art of Not Giving a F*ck", "Everything Is F*cked", "Models"],
  "Morgan Housel": ["The Psychology of Money", "Short Stories on Money", "Investing Insights"],
  "Alex Michaelides": ["The Silent Patient", "The Maidens", "Psychological Thrillers Collection"],
  "Brianna Wiest": ["The Mountain Is You", "101 Essays That Will Change The Way You Think", "The Truth About Everything"],
  "David Goggins": ["Can't Hurt Me", "Never Finished", "Living with a SEAL"],
  "Eckhart Tolle": ["The Power of Now", "A New Earth", "Practicing the Power of Now"]
};

const authorDescriptions = {
  "James Clear": "James Clear writes about habits, decision-making, and continuous improvement.",
  "Héctor García": "Héctor García focuses on the Japanese philosophy of Ikigai and a meaningful life.",
  "Paulo Coelho": "Paulo Coelho is a Brazilian author best known for inspiring novels like The Alchemist.",
  "Cal Newport": "Cal Newport writes about deep work and strategies for focused success.",
  "Jay Shetty": "Jay Shetty shares wisdom on mindfulness and living a purposeful life.",
  "Robin Sharma": "Robin Sharma is a leadership expert and author of motivational books.",
  "Yuval Noah Harari": "Yuval Noah Harari explores history, society, and the future in his writings.",
  "Ankur Warikoo": "Ankur Warikoo shares practical advice for personal growth and entrepreneurship.",
  "Jason Fried": "Jason Fried writes about productivity, business, and unconventional work methods.",
  "Nir Eyal": "Nir Eyal explores habits, behavior, and how to build engaging products.",
  "Mark Manson": "Mark Manson writes about self-help with a realistic, no-nonsense approach.",
  "Morgan Housel": "Morgan Housel focuses on finance, money psychology, and investing.",
  "Alex Michaelides": "Alex Michaelides writes psychological thrillers that keep readers hooked.",
  "Brianna Wiest": "Brianna Wiest writes about self-discovery, growth, and emotional intelligence.",
  "David Goggins": "David Goggins inspires readers with stories of resilience and mental toughness.",
  "Eckhart Tolle": "Eckhart Tolle writes about spirituality and living in the present moment."
};

class AuthorInfo extends Component {
  render() {
    const { author } = this.props;
    const description = authorDescriptions[author] || "This author has many interesting works.";
    const topBooks = topBooksByAuthor[author] || [];

    return (
      <div className="author-info">
        <h5>About {author}</h5>
        <p>{description}</p>
        <p><strong>Top 3 books by {author}:</strong></p>
        <ul>
          {topBooks.map((title, i) => <li key={i}>{title}</li>)}
        </ul>
      </div>
    );
  }
}

export default AuthorInfo;
