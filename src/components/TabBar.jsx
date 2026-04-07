// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { PaperPlane, User } from 'lucide-react';
// @ts-ignore;
import { useToast } from '@/components/ui';

const TabBar = ({
  activeTab = '首页',
  $w
}) => {
  const {
    toast
  } = useToast();
  const {
    navigateTo
  } = $w.utils;
  const handleTabClick = tab => {
    if (activeTab !== tab) {
      toast({
        title: '页面切换',
        description: `正在切换到${tab}页面`
      });
      if (tab === '首页') {
        navigateTo({
          pageId: 'home',
          params: {}
        });
      } else if (tab === '我的') {
        navigateTo({
          pageId: 'personal',
          params: {}
        });
      }
    }
  };
  return <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex">
      {/* 首页 */}
      <div className={`flex-1 flex flex-col items-center justify-center py-2 cursor-pointer ${activeTab === '首页' ? 'text-[#3B82F6]' : 'text-gray-500'}`} onClick={() => handleTabClick('首页')}>
        <PaperPlane size={24} className={activeTab === '首页' ? 'text-[#3B82F6]' : ''} />
        <span className="text-sm mt-1">首页</span>
      </div>

      {/* 我的 */}
      <div className={`flex-1 flex flex-col items-center justify-center py-2 cursor-pointer ${activeTab === '我的' ? 'text-[#3B82F6]' : 'text-gray-500'}`} onClick={() => handleTabClick('我的')}>
        <User size={24} className={activeTab === '我的' ? 'text-[#3B82F6]' : ''} />
        <span className="text-sm mt-1">我的</span>
      </div>
    </div>;
};
export default TabBar;