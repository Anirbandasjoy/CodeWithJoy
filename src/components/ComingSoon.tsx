"use client";

import React, { useState, useEffect } from "react";
import { 
  Clock, 
  Lock, 
  Sparkles, 
  EyeOff,
  Bell,
  Calendar,
  Zap,
  Star,
  ArrowRight
} from "lucide-react";

interface ComingSoonFeatureProps {
  title: string;
  description?: string;
  expectedDate?: string;
  priority?: "high" | "medium" | "low";
  category?: string;
  showNotifyButton?: boolean;
  className?: string;
  variant?: "card" | "banner" | "inline";
}

const ComingSoonFeature: React.FC<ComingSoonFeatureProps> = ({
  title,
  description = "This exciting feature is currently under development",
  expectedDate,
  priority = "medium",
  category = "Feature",
  showNotifyButton = true,
  className = "",
  variant = "card"
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [notifyRequested, setNotifyRequested] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Animation delay for entrance
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const getPriorityConfig = (priority: string) => {
    switch (priority) {
      case 'high':
        return {
          icon: Zap,
          bgGradient: 'bg-gradient-to-br from-gray-900 via-black to-gray-900',
          textColor: 'text-white',
          accentColor: 'text-gray-300',
          borderColor: 'border-gray-700',
          priorityLabel: 'High Priority',
          priorityBg: 'bg-white text-black'
        };
      case 'low':
        return {
          icon: Calendar,
          bgGradient: 'bg-gradient-to-br from-gray-100 via-gray-50 to-white',
          textColor: 'text-gray-900',
          accentColor: 'text-gray-600',
          borderColor: 'border-gray-300',
          priorityLabel: 'Future Release',
          priorityBg: 'bg-gray-800 text-white'
        };
      default: // medium
        return {
          icon: Star,
          bgGradient: 'bg-gradient-to-br from-gray-200 via-gray-100 to-white',
          textColor: 'text-gray-900',
          accentColor: 'text-gray-700',
          borderColor: 'border-gray-400',
          priorityLabel: 'Coming Soon',
          priorityBg: 'bg-black text-white'
        };
    }
  };

  const config = getPriorityConfig(priority);
  const PriorityIcon = config.icon;

  const handleNotifyRequest = () => {
    setNotifyRequested(true);
    // Here you can add logic to save notification request
    console.log(`Notification requested for: ${title}`);
  };

  // Card Variant
  if (variant === "card") {
    return (
      <div 
        className={`group relative overflow-hidden rounded-2xl border-2 ${config.borderColor} transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background */}
        <div className={`${config.bgGradient} p-8`}>
          
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div 
              className="absolute inset-0 bg-repeat animate-pulse"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23000000' fill-opacity='1'%3e%3ccircle cx='30' cy='30' r='1.5'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
              }}
            />
          </div>

          {/* Header */}
          <div className="relative z-10 flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className={`inline-flex items-center justify-center w-12 h-12 ${config.priorityBg} rounded-full shadow-lg`}>
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <span className={`inline-flex items-center gap-1 px-3 py-1 ${config.priorityBg} text-xs font-bold rounded-full shadow-md`}>
                  <PriorityIcon className="w-3 h-3" />
                  {config.priorityLabel}
                </span>
              </div>
            </div>

            {/* Category Badge */}
            <span className={`px-3 py-1 bg-white/10 backdrop-blur-sm ${config.accentColor} text-xs font-semibold rounded-full border border-white/20`}>
              {category}
            </span>
          </div>

          {/* Content */}
          <div className="relative z-10 space-y-4">
            <h3 className={`text-2xl font-black ${config.textColor} leading-tight`}>
              {title}
            </h3>
            
            <p className={`${config.accentColor} leading-relaxed text-base`}>
              {description}
            </p>

            {expectedDate && (
              <div className={`flex items-center gap-2 ${config.accentColor} text-sm font-medium`}>
                <Calendar className="w-4 h-4" />
                <span>Expected: {expectedDate}</span>
              </div>
            )}
          </div>

          {/* Action Button */}
          {showNotifyButton && (
            <div className="relative z-10 mt-8">
              {!notifyRequested ? (
                <button
                  onClick={handleNotifyRequest}
                  className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Bell className="w-4 h-4 group-hover/btn:animate-bounce" />
                  <span>Notify When Ready</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              ) : (
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-100 text-green-800 font-bold rounded-xl border-2 border-green-200">
                  <Sparkles className="w-4 h-4" />
                  <span>You will be notified!</span>
                </div>
              )}
            </div>
          )}

          {/* Hover Effect */}
          <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'} pointer-events-none`} />
        </div>
      </div>
    );
  }

  // Banner Variant
  if (variant === "banner") {
    return (
      <div className={`relative overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-4 px-6 rounded-xl border border-gray-700 ${className}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-10 h-10 bg-white text-black rounded-full">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-lg">{title}</h4>
              <p className="text-gray-400 text-sm">{description}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {expectedDate && (
              <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
                {expectedDate}
              </span>
            )}
            <EyeOff className="w-5 h-5 text-gray-500" />
          </div>
        </div>
      </div>
    );
  }

  // Inline Variant
  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-800 text-sm font-semibold rounded-full border border-gray-300 ${className}`}>
      <Clock className="w-4 h-4 animate-pulse" />
      <span>{title}</span>
      <span className="text-xs text-gray-500">- Coming Soon</span>
    </div>
  );
};

// Example Usage Component
const ComingSoonShowcase: React.FC = () => {
  return (
    <div className="space-y-8 p-8 bg-gray-50 min-h-screen">
      
      {/* Page Header */}
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-black text-gray-900">Coming Soon Features</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Exciting new features are under development. Stay tuned for amazing updates!
        </p>
      </div>

      {/* High Priority Feature */}
      <ComingSoonFeature
        title="Advanced Analytics Dashboard"
        description="Get detailed insights into your project performance with real-time analytics, custom reports, and data visualization tools."
        expectedDate="March 2024"
        priority="high"
        category="Analytics"
        variant="card"
      />

      {/* Medium Priority Feature */}
      <ComingSoonFeature
        title="Team Collaboration Tools"
        description="Work together seamlessly with your team using our new collaboration features including real-time editing, comments, and task management."
        expectedDate="April 2024"
        priority="medium"
        category="Collaboration"
        variant="card"
      />

      {/* Low Priority Feature */}
      <ComingSoonFeature
        title="Mobile App"
        description="Access your projects on the go with our native mobile application for iOS and Android devices."
        expectedDate="Summer 2024"
        priority="low"
        category="Mobile"
        variant="card"
      />

      {/* Banner Examples */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Banner Variants</h2>
        
        <ComingSoonFeature
          title="Dark Mode Support"
          description="Switch between light and dark themes"
          variant="banner"
        />

        <ComingSoonFeature
          title="API Integration"
          description="Connect with third-party services"
          variant="banner"
        />
      </div>

      {/* Inline Examples */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Inline Variants</h2>
        
        <div className="flex flex-wrap gap-4">
          <ComingSoonFeature
            title="Export Feature"
            variant="inline"
          />
          
          <ComingSoonFeature
            title="Advanced Search"
            variant="inline"
          />
          
          <ComingSoonFeature
            title="Custom Themes"
            variant="inline"
          />
        </div>
      </div>
    </div>
  );
};

export default ComingSoonShowcase;
export { ComingSoonFeature };