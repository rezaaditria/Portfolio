import { Suspense } from "react";
import {
  enrichTweet,
  type EnrichedTweet,
  type TweetProps,
  type TwitterComponents,
} from "react-tweet";
import { getTweet, type Tweet } from "react-tweet/api";

import { cn } from "@/lib/utils";

interface TwitterIconProps {
  className?: string;
  [key: string]: any;
}
const Twitter = ({ className, ...props }: TwitterIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    className={className}
    {...props}
  >
    <g fill="currentColor">
      <path d="M1 2h2.5L3.5 2h-2.5z">
        <animate
          fill="freeze"
          attributeName="d"
          dur="0.4s"
          values="M1 2h2.5L3.5 2h-2.5z;M1 2h2.5L18.5 22h-2.5z"
        />
      </path>
      <path d="M5.5 2h2.5L7.2 2h-2.5z">
        <animate
          fill="freeze"
          attributeName="d"
          dur="0.4s"
          values="M5.5 2h2.5L7.2 2h-2.5z;M5.5 2h2.5L23 22h-2.5z"
        />
      </path>
      <path d="M3 2h5v0h-5z" opacity="0">
        <set attributeName="opacity" begin="0.4s" to="1" />
        <animate
          fill="freeze"
          attributeName="d"
          begin="0.4s"
          dur="0.4s"
          values="M3 2h5v0h-5z;M3 2h5v2h-5z"
        />
      </path>
      <path d="M16 22h5v0h-5z" opacity="0">
        <set attributeName="opacity" begin="0.4s" to="1" />
        <animate
          fill="freeze"
          attributeName="d"
          begin="0.4s"
          dur="0.4s"
          values="M16 22h5v0h-5z;M16 22h5v-2h-5z"
        />
      </path>
      <path d="M18.5 2h3.5L22 2h-3.5z" opacity="0">
        <set attributeName="opacity" begin="0.5s" to="1" />
        <animate
          fill="freeze"
          attributeName="d"
          begin="0.5s"
          dur="0.4s"
          values="M18.5 2h3.5L22 2h-3.5z;M18.5 2h3.5L5 22h-3.5z"
        />
      </path>
    </g>
  </svg>
);

const Verified = ({ className, ...props }: TwitterIconProps) => (
  <svg
    aria-label="Verified Account"
    viewBox="0 0 24 24"
    className={className}
    {...props}
  >
    <g fill="currentColor">
      <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
    </g>
  </svg>
);

export const truncate = (str: string | null, length: number) => {
  if (!str || str.length <= length) return str;
  return `${str.slice(0, length - 3)}...`;
};

const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-primary/10", className)}
      {...props}
    />
  );
};

export const TweetSkeleton = ({
  className,
  ...props
}: {
  className?: string;
  [key: string]: any;
}) => (
  <div
    className={cn(
      "flex h-full max-h-max w-full min-w-[18rem] flex-col gap-2 rounded-lg border p-4",
      className
    )}
    {...props}
  >
    <div className="flex flex-row gap-2">
      <Skeleton className="h-10 w-10 shrink-0 rounded-full" />
      <Skeleton className="h-10 w-full" />
    </div>
    <Skeleton className="h-20 w-full" />
  </div>
);

export const TweetNotFound = ({
  className,
  ...props
}: {
  className?: string;
  [key: string]: any;
}) => (
  <div
    className={cn(
      "flex h-full w-full flex-col items-center justify-center gap-2 rounded-lg border p-4",
      className
    )}
    {...props}
  >
    <h3>Tweet not found</h3>
  </div>
);

export const TweetHeader = ({ tweet }: { tweet: EnrichedTweet }) => (
  <div className="flex flex-row justify-between tracking-tight">
    <div className="flex items-center space-x-2">
      <a href={tweet.user.url} target="_blank" rel="noreferrer">
        <img
          title={`Profile picture of ${tweet.user.name}`}
          alt={tweet.user.screen_name}
          height={48}
          width={48}
          src={tweet.user.profile_image_url_https}
          className="overflow-hidden rounded-full border border-transparent"
        />
      </a>
      <div>
        <a
          href={tweet.user.url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center whitespace-nowrap font-semibold"
        >
          {truncate(tweet.user.name, 20)}
          {tweet.user.verified ||
            (tweet.user.is_blue_verified && (
              <Verified className="ml-1 inline h-4 w-4 text-blue-500" />
            ))}
        </a>
        <div className="flex items-center space-x-1">
          <a
            href={tweet.user.url}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-gray-500 transition-all duration-75"
          >
            @{truncate(tweet.user.screen_name, 16)}
          </a>
        </div>
      </div>
    </div>
    <a href={tweet.url} target="_blank" rel="noreferrer">
      <span className="sr-only">Link to tweet</span>
      <Twitter className="h-5 w-5 items-start text-[#3BA9EE] transition-all ease-in-out hover:scale-105" />
    </a>
  </div>
);

export const TweetBody = ({ tweet }: { tweet: EnrichedTweet }) => (
  <div className="break-words leading-normal tracking-tighter">
    {tweet.entities.map((entity, idx) => {
      switch (entity.type) {
        case "url":
        case "symbol":
        case "hashtag":
        case "mention":
          return (
            <a
              key={idx}
              href={entity.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-normal text-gray-500"
            >
              <span>{entity.text}</span>
            </a>
          );
        case "text":
          return (
            <span
              key={idx}
              className="text-sm font-normal"
              dangerouslySetInnerHTML={{ __html: entity.text }}
            />
          );
      }
    })}
  </div>
);

export const TweetMedia = ({ tweet }: { tweet: EnrichedTweet }) => (
  <div className="flex flex-1 items-center justify-center">
    {tweet.video && (
      <video
        poster={tweet.video.poster}
        autoPlay
        loop
        muted
        playsInline
        className="rounded-xl border shadow-sm"
      >
        <source src={tweet.video.variants[0].src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )}
    {tweet.photos && (
      <div className="relative flex transform-gpu snap-x snap-mandatory gap-4 overflow-x-auto">
        <div className="shrink-0 snap-center sm:w-2" />
        {tweet.photos.map((photo) => (
          <img
            key={photo.url}
            src={photo.url}
            title={"Photo by " + tweet.user.name}
            alt={tweet.text}
            className="h-64 w-5/6 shrink-0 snap-center snap-always rounded-xl border object-cover shadow-sm"
          />
        ))}
        <div className="shrink-0 snap-center sm:w-2" />
      </div>
    )}
    {!tweet.video &&
      !tweet.photos &&
      // @ts-ignore
      tweet?.card?.binding_values?.thumbnail_image_large?.image_value.url && (
        <img
          // @ts-ignore
          src={tweet.card.binding_values.thumbnail_image_large.image_value.url}
          className="h-64 rounded-xl border object-cover shadow-sm"
        />
      )}
  </div>
);

export const MagicTweet = ({
  tweet,
  components,
  className,
  ...props
}: {
  tweet: Tweet;
  components?: TwitterComponents;
  className?: string;
}) => {
  const enrichedTweet = enrichTweet(tweet);
  return (
    <div
      className={cn(
        "relative flex h-full w-full max-w-[32rem] flex-col gap-2 overflow-hidden rounded-lg border p-4 backdrop-blur-md",
        className
      )}
      {...props}
    >
      <TweetHeader tweet={enrichedTweet} />
      <TweetBody tweet={enrichedTweet} />
      <TweetMedia tweet={enrichedTweet} />
    </div>
  );
};

/**
 * TweetCard (Server Side Only)
 */
export const TweetCard = async ({
  id,
  components,
  fallback = <TweetSkeleton />,
  onError,
  ...props
}: TweetProps & {
  className?: string;
}) => {
  const tweet = id
    ? await getTweet(id).catch((err) => {
        if (onError) {
          onError(err);
        } else {
          console.error(err);
        }
      })
    : undefined;

  if (!tweet) {
    const NotFound = components?.TweetNotFound || TweetNotFound;
    return <NotFound {...props} />;
  }

  return (
    <Suspense fallback={fallback}>
      <MagicTweet tweet={tweet} {...props} />
    </Suspense>
  );
};

export default TweetCard;
