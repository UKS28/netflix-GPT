import GptMovie from "./GptMovie"
import GptSearch from "./GptSearch"
import { NETFLIX_BG} from "../utils/constant"

const GptContainer = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="object-cover " src={NETFLIX_BG} alt="logo" />
      </div>
      <div >
        <GptSearch />
        <GptMovie /> 
      </div>

    </>
  )
}

export default GptContainer
