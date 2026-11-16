import { YouTubeEmbed } from '@next/third-parties/google'

export default function Page() {
  return (
    <main>
      <h1>YouTubeEmbed asset reproduction</h1>
      <YouTubeEmbed videoid="ogfYd705cRs" width={640} height={360} />
    </main>
  )
}
