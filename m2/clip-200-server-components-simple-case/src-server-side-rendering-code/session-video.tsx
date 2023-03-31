import { IYouTubeData } from "@/lib/ts-interfaces";

export default function SessionVideo({
  id,
  youTubeData,
}: {
  id: string;
  youTubeData: IYouTubeData[];
}) {
  const youTubeRec = youTubeData.filter((rec: IYouTubeData) => rec.id === id);
  const data = youTubeRec && youTubeRec.length > 0 ? youTubeRec[0] : undefined;

  return (
    <>
    {data ? (
      <div className="row">
        <div className="col-5">
          <a target="_blank" href={`https://www.youtube.com/watch?v=${id}}`}>
            <img
              src={data?.snippet?.thumbnails?.medium?.url}
              width={100}
              alt="youtube thumb"
            />
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-5 text-secondary">
          Views: {data?.statistics?.viewCount}
        </div>
      </div>
    )
    : null}
  </>
  );
}
