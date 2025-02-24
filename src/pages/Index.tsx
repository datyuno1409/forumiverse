
import React from "react";
import Navigation from "../components/Navigation";
import { Card } from "../components/ui/card";

interface GameItem {
  id: number;
  title: string;
  image: string;
  version: string;
  size: string;
  androidVersion: string;
}

const recentGames: GameItem[] = [
  {
    id: 1,
    title: "Last Stronghold: Idle Survival",
    image: "/public/lovable-uploads/42fa6c2a-fd9b-4dce-808b-0eae3f082df7.png",
    version: "1.3.1",
    size: "168 MB",
    androidVersion: "Android 8.0 trở lên"
  },
  // Add more games as needed
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24">
        <div className="grid grid-cols-12 gap-8">
          {/* Main content */}
          <div className="col-span-12 lg:col-span-8">
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h1 className="text-2xl font-bold text-center mb-4">GAMEHAYVL.com</h1>
              <h2 className="text-lg text-center mb-6">Game, App APK miễn phí</h2>
              <p className="text-gray-600 mb-4">
                Chào mừng đến với GAMEHAYVL - Trang tổng hợp, tin tức và đánh giá ứng dụng Android miễn phí tốt nhất, 
                nơi bạn có thể khám phá không giới hạn các ứng dụng, game APK mà bạn yêu thích.
              </p>
              <p className="text-center text-red-500 font-semibold">
                Quan trọng: Hoàng Sa, Trường Sa là của VIỆT NAM
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-6">Mới Nhất</h2>
              <div className="space-y-4">
                {recentGames.map(game => (
                  <Card key={game.id} className="p-4 hover:shadow-md transition-shadow">
                    <div className="flex space-x-4">
                      <img src={game.image} alt={game.title} className="w-20 h-20 rounded-lg object-cover" />
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">{game.title}</h3>
                        <p className="text-sm text-gray-600">{game.androidVersion}</p>
                        <div className="flex space-x-3 mt-2">
                          <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                            {game.version}
                          </span>
                          <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                            {game.size}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-4">DANH MỤC</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Game</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Game Offline</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Ứng Dụng</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Hướng dẫn & Thủ Thuật</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Giftcode & Cẩm Nang Game</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Tin Game</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
