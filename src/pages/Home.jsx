// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Ship, Plane, Armchair, Hand, Edit, Clipboard, ClipboardCheck, Bell, Anchor, DollarSign, Package, List, Headphones } from 'lucide-react';
// @ts-ignore;
import { useToast } from '@/components/ui';

import TabBar from '@/components/TabBar';
import ServiceCard from '@/components/ServiceCard';
const Home = props => {
  const {
    toast
  } = useToast();
  const {
    navigateTo
  } = props.$w.utils;
  const currentUser = props.$w.auth.currentUser || {
    name: '访客',
    avatarUrl: ''
  };
  const handleServiceClick = service => {
    toast({
      title: '服务选择',
      description: `您选择了${service}服务`
    });
    navigateTo({
      pageId: 'service_detail',
      params: {
        service
      }
    });
  };
  const handleToolClick = tool => {
    toast({
      title: '工具选择',
      description: `正在打开${tool}`
    });
    switch (tool) {
      case '海运待认领':
        navigateTo({
          pageId: 'shipping_claim',
          params: {}
        });
        break;
      case '空运待确认':
        navigateTo({
          pageId: 'air_confirm',
          params: {}
        });
        break;
      case '我的运单':
        navigateTo({
          pageId: 'orders',
          params: {}
        });
        break;
      case '公告消息':
        navigateTo({
          pageId: 'announcements',
          params: {}
        });
        break;
      case '询价':
        navigateTo({
          pageId: 'inquiry',
          params: {}
        });
        break;
      case '船期信息':
        navigateTo({
          pageId: 'schedule',
          params: {}
        });
        break;
      default:
        break;
    }
  };
  const handleCustomerService = () => {
    toast({
      title: '客服',
      description: '正在连接客服...'
    });
  };
  return <div className="bg-gray-50 min-h-screen pb-16">
      {/* 顶部公告区域 */}
      <div className="bg-[#1E293B] text-white p-3">
        {/* Logo */}
        <div className="flex items-center mb-1">
          <div className="w-10 h-6 bg-white rounded flex items-center justify-center mr-2">
            <span className="text-xs font-bold text-[#1E293B]">天天</span>
          </div>
          <div className="text-xs text-gray-300">海运</div>
        </div>

        {/* 公告标题 */}
        <h1 className="text-lg font-bold mb-1">天天海运 公告</h1>
        <p className="text-xs text-gray-300">2024.06.21</p>

        {/* 公告内容 */}
        <div className="bg-[#F59E0B]/20 border-2 border-[#d1d5db] mt-2 p-3 rounded-lg shadow">
          <p className="mb-1 text-xs">
            天天海运致力于为您提供专业的海运服务，为保障客户权益，杜绝运输违禁品，提升服务质量，今日起我司将对违禁品采取零容忍政策，货物一经入仓，将进行随机开箱抽查。
          </p>
          <p className="mb-1 text-red-600 font-bold text-xs">
            一旦发现违禁品，将对整件或整批货物进行销毁处理。
          </p>
          <p className="text-xs">
            如您有不确定是否能够邮寄的物品，请及时联系客服咨询，拒绝侥幸心理
          </p>
        </div>
      </div>

      {/* 服务卡片区域 */}
      <div className="p-2">
        <div className="grid grid-cols-3 gap-2">
          {/* 海运拼邮 */}
          <ServiceCard icon={<Ship className="text-white" size={32} />} title="海运拼邮" subtitle1="包税海运" subtitle2="先买后报" onClick={() => handleServiceClick('海运拼邮')} />
          {/* 空运直邮 */}
          <ServiceCard icon={<Plane className="text-white" size={32} />} title="空运直邮" subtitle1="时效更快" subtitle2="一价全包" onClick={() => handleServiceClick('空运直邮')} />
          {/* 回国海运 */}
          <ServiceCard icon={<Armchair className="text-white" size={32} />} title="回国海运" subtitle1="专线" onClick={() => handleServiceClick('回国海运')} />
        </div>
      </div>

      {/* 更多工具区域 */}
      <div className="p-2">
        <div className="flex items-center mb-2">
          <div className="w-1 h-5 bg-[#3B82F6] mr-2"></div>
          <h2 className="text-sm font-bold">常用服务</h2>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {/* 海运认领 */}
          <div className="flex flex-col items-center p-2 cursor-pointer hover:bg-gray-100 rounded" onClick={() => handleToolClick('海运认领')}>
            <div className="w-10 h-10 flex items-center justify-center bg-blue-400 rounded mb-1">
              <Hand className="text-white" size={20} />
            </div>
            <div className="text-xs text-center">海运认领</div>
          </div>
          {/* 海运自填 */}
          <div className="flex flex-col items-center p-2 cursor-pointer hover:bg-gray-100 rounded" onClick={() => handleToolClick('海运自填')}>
            <div className="w-10 h-10 flex items-center justify-center bg-blue-400 rounded mb-1">
              <Edit className="text-white" size={20} />
            </div>
            <div className="text-xs text-center">海运自填</div>
          </div>
          {/* 空运认领 */}
          <div className="flex flex-col items-center p-2 cursor-pointer hover:bg-gray-100 rounded" onClick={() => handleToolClick('空运认领')}>
            <div className="w-10 h-10 flex items-center justify-center bg-blue-400 rounded mb-1">
              <Clipboard className="text-white" size={20} />
            </div>
            <div className="text-xs text-center">空运认领</div>
          </div>
          {/* 空运自填 */}
          <div className="flex flex-col items-center p-2 cursor-pointer hover:bg-gray-100 rounded" onClick={() => handleToolClick('空运自填')}>
            <div className="w-10 h-10 flex items-center justify-center bg-blue-400 rounded mb-1">
              <ClipboardCheck className="text-white" size={20} />
            </div>
            <div className="text-xs text-center">空运自填</div>
          </div>
          {/* 公告信息 */}
          <div className="flex flex-col items-center p-2 cursor-pointer hover:bg-gray-100 rounded" onClick={() => $w.utils.navigateTo({
          pageId: 'Announcements',
          params: {}
        })}>
            <div className="w-10 h-10 flex items-center justify-center bg-blue-400 rounded mb-1">
              <Bell className="text-white" size={20} />
            </div>
            <div className="text-xs text-center">公告信息</div>
          </div>
          {/* 船期信息 */}
          <div className="flex flex-col items-center p-2 cursor-pointer hover:bg-gray-100 rounded" onClick={() => handleToolClick('船期信息')}>
            <div className="w-10 h-10 flex items-center justify-center bg-blue-400 rounded mb-1">
              <Anchor className="text-white" size={20} />
            </div>
            <div className="text-xs text-center">船期信息</div>
          </div>
          {/* 询价 */}
          <div className="flex flex-col items-center p-2 cursor-pointer hover:bg-gray-100 rounded" onClick={() => $w.utils.navigateTo({
          pageId: 'Inquiry',
          params: {}
        })}>
            <div className="w-10 h-10 flex items-center justify-center bg-blue-400 rounded mb-1">
              <DollarSign className="text-white" size={20} />
            </div>
            <div className="text-xs text-center">询价</div>
          </div>
          {/* 我的运单 */}
          <div className="flex flex-col items-center p-2 cursor-pointer hover:bg-gray-100 rounded" onClick={() => $w.utils.navigateTo({
          pageId: 'Orders',
          params: {}
        })}>
            <div className="w-10 h-10 flex items-center justify-center bg-blue-400 rounded mb-1">
              <List className="text-white" size={20} />
            </div>
            <div className="text-xs text-center">我的运单</div>
          </div>
        </div>
      </div>

      {/* 客服悬浮按钮 */}
      <div className="fixed right-4 bottom-20 bg-white rounded-full p-2 shadow-lg cursor-pointer hover:shadow-xl" onClick={handleCustomerService}>
        <Headphones className="text-[#3B82F6]" size={24} />
      </div>

      {/* 底部导航栏 */}
      <TabBar activeTab="首页" $w={$w} />
    </div>;
};
export default Home;