import GptMovie from "./GptMovie"
import GptSearch from "./GptSearch"
import { NETFLIX_BG} from "../utils/constant"

const GptContainer = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="object-cover " src={NETFLIX_BG} alt="logo" />
      </div>
      <div className="">
        <GptSearch />
        {/* <h6 className="m-4 p-4">Note: Movie recommendations powered by GPT are available on request due to paid APIs.</h6> */}
        <GptMovie /> 
      </div>

    </>
  )
}

export default GptContainer
