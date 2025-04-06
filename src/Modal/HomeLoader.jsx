import React from 'react';
import ContentLoader, { Rect, Circle } from 'react-content-loader';
import { FaBars, FaBell } from 'react-icons/fa'; // Replacing Entypo and Ionicons with react-icons
import './MyLoader.css'; // External CSS file for styling

const MyLoader = (props) => (
  <div className="screen">
    <div className="scrollContainer">
      {/* Header Section */}
      <div className="headerContainer">
        <button>
          <FaBars size={24} color="black" />
        </button>

        <button>
          <FaBell size={30} color="black" />
        </button>
      </div>

      {/* Wallet Card Loader */}
      <ContentLoader
        speed={2}
        width={400}
        height={350}
        viewBox="0 0 400 350"
        backgroundColor="#f3f3f3"
        foregroundColor="#e0e0e0"
        {...props}
      >
        <Rect x="50" y="50" rx="15" ry="15" width="300" height="80" />
        <Rect x="50" y="160" rx="15" ry="15" width="130" height="40" />
        <Rect x="230" y="160" rx="15" ry="15" width="130" height="40" />
        <Rect x="50" y="220" rx="10" ry="10" width="120" height="60" />
        <Rect x="180" y="220" rx="10" ry="10" width="120" height="60" />
      </ContentLoader>

      {/* Portfolio Section Loader */}
      <div className="sectionHeader">
        <span className="sectionTitle">Portfolio</span>
        <span className="viewAll">View all</span>
      </div>
      <div className="portfolioGrid">
        <ContentLoader
          speed={2}
          width={180}
          height={180}
          viewBox="0 0 180 180"
          backgroundColor="#f3f3f3"
          foregroundColor="#e0e0e0"
          {...props}
        >
          <Circle cx="90" cy="50" r="30" />
          <Rect x="15" y="100" rx="10" ry="10" width="150" height="20" />
          <Rect x="15" y="130" rx="10" ry="10" width="150" height="20" />
        </ContentLoader>

        <ContentLoader
          speed={2}
          width={180}
          height={180}
          viewBox="0 0 180 180"
          backgroundColor="#f3f3f3"
          foregroundColor="#e0e0e0"
          {...props}
        >
          <Circle cx="90" cy="50" r="30" />
          <Rect x="15" y="100" rx="10" ry="10" width="150" height="20" />
          <Rect x="15" y="130" rx="10" ry="10" width="150" height="20" />
        </ContentLoader>

        <ContentLoader
          speed={2}
          width={180}
          height={180}
          viewBox="0 0 180 180"
          backgroundColor="#f3f3f3"
          foregroundColor="#e0e0e0"
          {...props}
        >
          <Circle cx="90" cy="50" r="30" />
          <Rect x="15" y="100" rx="10" ry="10" width="150" height="20" />
          <Rect x="15" y="130" rx="10" ry="10" width="150" height="20" />
        </ContentLoader>
      </div>

      {/* Market Trends Section Loader */}
      <div className="sectionHeader">
        <span className="sectionTitle">Market trend</span>
        <span className="viewAll">View all</span>
      </div>

      <ContentLoader
        speed={2}
        width={400}
        height={80}
        viewBox="0 0 400 80"
        backgroundColor="#f3f3f3"
        foregroundColor="#e0e0e0"
        {...props}
      >
        <Rect x="10" y="20" rx="15" ry="15" width="120" height="50" />
        <Rect x="140" y="20" rx="15" ry="15" width="120" height="50" />
        <Rect x="270" y="20" rx="15" ry="15" width="120" height="50" />
      </ContentLoader>
    </div>
  </div>
);

export default MyLoader;
