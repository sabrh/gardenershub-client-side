import React from 'react';
import { FaQuestion } from 'react-icons/fa';

const Faq = () => {
    return (
        <div className="max-w-6xl mx-auto py-10">
            <h2 className="flex items-center justify-center text-3xl font-bold text-center mb-6 text-green-700"><FaQuestion/> FAQs</h2>    
            <div className="collapse collapse-arrow bg-green-100 border border-base-300 mb-2">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title font-semibold">How often should I water my plants?</div>
                <div className="collapse-content text-sm">Most indoor and outdoor garden plants should be watered when the top inch of soil feels dry. Avoid overwatering by checking the soil first—watering needs can vary based on plant type, weather, and pot size.</div>
            </div>
            <div className="collapse collapse-arrow bg-green-100 border border-base-300 mb-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">What is the best time of day to water my garden?</div>
                <div className="collapse-content text-sm">The best time to water your plants is early in the morning or late in the afternoon when temperatures are cooler. This reduces evaporation and allows roots to absorb moisture more effectively.</div>
            </div>
            <div className="collapse collapse-arrow bg-green-100 border border-base-300 mb-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">What are the easiest vegetables to grow at home?</div>
                <div className="collapse-content text-sm">Beginners can start with easy-to-grow vegetables like tomatoes, lettuce, spinach, radishes, green beans, and herbs such as basil or mint. These require minimal effort and thrive in small spaces or containers.</div>
            </div>
            <div className="collapse collapse-arrow bg-green-100 border border-base-300 mb-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">How do I prevent pests in my garden naturally?</div>
                <div className="collapse-content text-sm">Use natural pest control methods like neem oil spray, garlic spray, or introducing beneficial insects such as ladybugs. Keeping your garden clean and rotating crops also helps reduce pest infestations.</div>
            </div>
            <div className="collapse collapse-arrow bg-green-100 border border-base-300 mb-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">Can I start a garden if I don’t have a yard?</div>
                <div className="collapse-content text-sm">Absolutely! You can grow plants in containers, hanging pots, window boxes, or vertical planters on your balcony, windowsill, or even indoors with enough sunlight or grow lights.</div>
            </div>
            <div className="collapse collapse-arrow bg-green-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">Why are my plant leaves turning yellow?</div>
                <div className="collapse-content text-sm">Yellow leaves often indicate overwatering, underwatering, lack of nutrients, or poor drainage. Check the soil moisture, ensure proper drainage, and consider using a balanced fertilizer.</div>
            </div>
        </div>
    );
};

export default Faq;