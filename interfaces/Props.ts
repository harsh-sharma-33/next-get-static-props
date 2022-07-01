export interface PostProps {
    posts?: Posts[],
    post?:Posts
  }

export   interface Posts {
    id: string;
    attributes: {
      title: string;
      description: string;
      content: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  }

