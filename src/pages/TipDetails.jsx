import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { FaThumbsUp } from "react-icons/fa"

const TipDetails = () => {
  const { id } = useParams()
  const [tip, setTip] = useState(null)
  const [loading, setLoading] = useState(true)
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:3000/sharetips/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log("Fetched Tip: ", data)
        setTip(data);
        setLoading(false);
      })
      .catch(err => {
        console.log("Error fetching tip: ", err)
        setLoading(false)
      })
  }, [id])

  const handleLike = () => {
    if (liked) return

    fetch(`http://localhost:3000/sharetips/like/${id}`, {
      method: "PATCH"
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          setTip(prev => ({ ...prev, totalLiked: (prev.totalLiked || 0) + 1 }))
          setLiked(true)
        }
      })
  }

  if (loading) return <p className="text-center mt-10">Loading...</p>
  if (!tip) return <p className="text-center mt-10">Tip not found.</p>

  return (
    <div className="md:flex max-w-4xl mx-auto p-6 bg-white rounded-lg my-1">
      <img src={tip.imgUrl} alt={tip.title} className="w-50 h-50 md:w-100 md:h-100 rounded-lg mb-4" />
      <div className="md:ml-10">
        <h2 className="text-2xl font-bold text-green-700 mb-2">{tip.title}</h2>
        <p className="text-gray-600 mb-2"><strong>Topic:</strong> {tip.topic}</p>
        <p className="text-gray-600 mb-2"><strong>Difficulty:</strong> {tip.difficulty}</p>
        <p className="text-gray-600 mb-2"><strong>Category:</strong> {tip.category}</p>
        <p className="text-gray-800 my-4">{tip.description}</p>
        <button onClick={handleLike} disabled={liked} className={`flex items-center gap-2 px-4 py-2 rounded ${liked ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'} text-white`}>
        <FaThumbsUp /> Like {tip.totalLiked || 0}
      </button>
      </div>

      
    </div>
  );
};

export default TipDetails;
