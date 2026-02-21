import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  
  // State for Add Content page
  const [urlInput, setUrlInput] = useState('');
  const [textInput, setTextInput] = useState('');
  const [isClassifying, setIsClassifying] = useState(false);
  
  // State for saved items
  const [savedItems, setSavedItems] = useState([
    {
      id: 1,
      title: "Hackathon Challenge: Social Saver Bot",
      description: "A hackathon challenge to develop a WhatsApp bot that saves Instagram content to a personal website.",
      summary: "💡 The content focuses on building a bot to automate saving and organizing social media content, which involves coding and software development.",
      category: "Coding",
      platform: "other",
      date: "Feb 21",
      link: "https://d8it4huxumps7.cloudfront.net/uploads/submissions_case/6996063a2b2f8_Hackathon_Challenge__The_Social_Saver_Bot.pdf",
      likes: "❤️"
    },
    {
      id: 2,
      title: "5 Compound Exercises That Changed Everything",
      description: "A breakdown of 5 key compound exercises that transformed one person's physique over 6 months, emphasizing consistency over perfection.",
      summary: "❤️ The post focuses on gym exercises and physical transformation, which clearly falls under Fitness.",
      category: "Fitness",
      platform: "instagram",
      date: "Feb 21",
      link: "https://www.instagram.com/p/fitness-motivation-2025",
      likes: "❤️"
    },
    {
      id: 3,
      title: "5 React Patterns You Should Know",
      description: "Five React optimization patterns including useMemo, useCallback, custom hooks, React.memo, and Suspense to write cleaner and more performant code.",
      summary: "💡 The content is specifically about React programming patterns and code optimization techniques.",
      category: "Coding",
      platform: "instagram",
      date: "Feb 21",
      link: "https://www.instagram.com/p/react-tips-2025",
      likes: "❤️"
    },
    {
      id: 4,
      title: "Perfect Sourdough Secrets",
      description: "Expert sourdough bread tips covering oven temperature, scoring technique, and the importance of steam for achieving the perfect crust.",
      summary: "💡 The post is entirely about baking techniques and food preparation.",
      category: "Food",
      platform: "twitter",
      date: "Feb 21",
      link: "https://twitter.com/foodie/status/sourdough-tips",
      likes: "❤️"
    },
    {
      id: 5,
      title: "Bali Under $30/Day",
      description: "A budget travel guide to Bali recommending Sidemen over tourist spots, with tips for spending under $30 per day on food, transport, and accommodation.",
      summary: "💡 The content provides travel destination recommendations and budget planning advice.",
      category: "Travel",
      platform: "instagram",
      date: "Feb 21",
      link: "https://www.instagram.com/p/bali-travel-guide",
      likes: "❤️"
    },
    {
      id: 6,
      title: "2025 UI Design Trends",
      description: "Overview of 2025 UI design trends including bento grids, crystal UI (evolved glassmorphism), AI illustrations, and variable fonts.",
      summary: "💡 The post discusses user interface design trends and visual design patterns.",
      category: "Design",
      platform: "twitter",
      date: "Feb 21",
      link: "https://twitter.com/designtips/status/ui-trends",
      likes: "❤️"
    },
    {
      id: 7,
      title: "3 Failed Startups, 5 Lessons",
      description: "Lessons from three failed startups emphasizing fast shipping, daily user engagement, focused feature development, and revenue as the ultimate validation.",
      summary: "💡 The content shares entrepreneurship lessons and startup business advice.",
      category: "Business",
      platform: "instagram",
      date: "Feb 21",
      link: "https://www.instagram.com/p/startup-advice-2025",
      likes: "❤️"
    }
  ]);

  // Function to delete an item
  const deleteItem = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setSavedItems(savedItems.filter(item => item.id !== id));
    }
  };

  // Function to classify and save content
  const classifyAndSave = () => {
    if (!urlInput && !textInput) {
      alert('Please enter a URL or text content');
      return;
    }

    setIsClassifying(true);

    // Simulate AI classification
    setTimeout(() => {
      let category = 'Other';
      let summary = '';
      let platform = 'web';
      let title = '';
      let description = '';

      const contentToAnalyze = (urlInput + ' ' + textInput).toLowerCase();

      // Detect platform
      if (urlInput.includes('instagram.com')) {
        platform = 'instagram';
      } else if (urlInput.includes('twitter.com') || urlInput.includes('x.com')) {
        platform = 'twitter';
      } else if (urlInput.includes('youtube.com') || urlInput.includes('youtu.be')) {
        platform = 'youtube';
      }

      // Detect category
      if (contentToAnalyze.includes('coding') || contentToAnalyze.includes('programming') || 
          contentToAnalyze.includes('react') || contentToAnalyze.includes('python') ||
          contentToAnalyze.includes('javascript') || contentToAnalyze.includes('developer')) {
        category = 'Coding';
      } else if (contentToAnalyze.includes('fitness') || contentToAnalyze.includes('workout') || 
                 contentToAnalyze.includes('exercise') || contentToAnalyze.includes('gym') ||
                 contentToAnalyze.includes('training') || contentToAnalyze.includes('health')) {
        category = 'Fitness';
      } else if (contentToAnalyze.includes('food') || contentToAnalyze.includes('recipe') || 
                 contentToAnalyze.includes('cooking') || contentToAnalyze.includes('baking') ||
                 contentToAnalyze.includes('restaurant') || contentToAnalyze.includes('dinner')) {
        category = 'Food';
      } else if (contentToAnalyze.includes('travel') || contentToAnalyze.includes('trip') || 
                 contentToAnalyze.includes('vacation') || contentToAnalyze.includes('bali') ||
                 contentToAnalyze.includes('hotel') || contentToAnalyze.includes('flight')) {
        category = 'Travel';
      } else if (contentToAnalyze.includes('design') || contentToAnalyze.includes('ui') || 
                 contentToAnalyze.includes('ux') || contentToAnalyze.includes('trend') ||
                 contentToAnalyze.includes('graphic') || contentToAnalyze.includes('art')) {
        category = 'Design';
      } else if (contentToAnalyze.includes('business') || contentToAnalyze.includes('startup') || 
                 contentToAnalyze.includes('entrepreneur') || contentToAnalyze.includes('company') ||
                 contentToAnalyze.includes('marketing') || contentToAnalyze.includes('sales')) {
        category = 'Business';
      }

      // Generate title and description
      if (textInput) {
        const sentences = textInput.split(/[.!?]+/);
        title = sentences[0] || 'New Content';
        if (title.length > 50) title = title.substring(0, 50) + '...';
        description = sentences[1] || sentences[0] || textInput.substring(0, 100);
        summary = `❤️ ${category === 'Fitness' ? 'The post focuses on gym exercises and physical transformation' : 
                   category === 'Coding' ? 'The content is about programming and software development' :
                   category === 'Food' ? 'The post is about cooking and food preparation' :
                   category === 'Travel' ? 'Travel destination recommendations and advice' :
                   category === 'Design' ? 'User interface design trends and patterns' :
                   category === 'Business' ? 'Entrepreneurship and business advice' :
                   'Content saved from web'} which clearly falls under ${category}.`;
      } else {
        const urlParts = urlInput.split('/');
        title = urlParts[urlParts.length - 1] || 'Link';
        title = title.replace(/-/g, ' ').replace(/_/g, ' ');
        if (title.length > 50) title = title.substring(0, 50) + '...';
        description = `Content saved from ${platform}`;
        summary = `💡 ${category === 'Fitness' ? 'Fitness and exercise related content' : 
                     category === 'Coding' ? 'Programming and development content' :
                     category === 'Food' ? 'Food and cooking content' :
                     category === 'Travel' ? 'Travel and destination content' :
                     category === 'Design' ? 'Design and UI/UX content' :
                     category === 'Business' ? 'Business and entrepreneurship content' :
                     'Web content'} saved from ${platform}.`;
      }

      // Create new item
      const newItem = {
        id: savedItems.length + 1,
        title: title,
        description: description,
        summary: summary,
        category: category,
        platform: platform,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        link: urlInput || '#',
        likes: category === 'Fitness' ? '❤️' : '💡'
      };

      // Add to saved items
      setSavedItems([newItem, ...savedItems]);
      
      // Clear inputs
      setUrlInput('');
      setTextInput('');
      setIsClassifying(false);
      
      // Switch to dashboard to show new item
      setCurrentPage('dashboard');
    }, 1500);
  };

  // Function to connect WhatsApp
  const connectWhatsApp = () => {
    // Open WhatsApp with pre-filled message
    const phoneNumber = '14155238886';
    const message = encodeURIComponent('Hi! I want to connect to Social Saver Bot');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  // Calculate category counts dynamically
  const getCategoryCounts = () => {
    const counts = {};
    savedItems.forEach(item => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  };

  const categoryCounts = getCategoryCounts();

  const filteredItems = savedItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (item.summary && item.summary.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = filter === 'all' || item.category.toLowerCase() === filter.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const getCategoryColor = (category) => {
    const colors = {
      Coding: 'blue',
      Fitness: 'emerald',
      Food: 'orange',
      Travel: 'sky',
      Design: 'violet',
      Business: 'amber',
      Other: 'gray'
    };
    return colors[category] || 'gray';
  };

  // Render different pages
  const renderPage = () => {
    switch(currentPage) {
      case 'dashboard':
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900">Knowledge Base</h1>
              <p className="text-sm text-gray-500 mt-1">{savedItems.length} saved items across your collection</p>
            </div>

            {/* Category Filters - Exactly as in screenshot */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {Object.entries(categoryCounts).map(([category, count]) => (
                  <button
                    key={category}
                    onClick={() => setFilter(category.toLowerCase())}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border transition-all ${
                      filter === category.toLowerCase()
                        ? `bg-${getCategoryColor(category)}-50 text-${getCategoryColor(category)}-700 border-${getCategoryColor(category)}-200`
                        : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-sm font-medium">{category}</span>
                    <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                      filter === category.toLowerCase()
                        ? `bg-${getCategoryColor(category)}-200`
                        : 'bg-gray-100'
                    }`}>{count}</span>
                  </button>
                ))}
                <button
                  onClick={() => setFilter('all')}
                  className={`px-4 py-2 rounded-xl border transition-all ${
                    filter === 'all' 
                      ? 'bg-gray-900 text-white border-gray-900' 
                      : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  All
                </button>
              </div>
            </div>

            {/* Search and Random Button */}
            <div className="mb-6 flex gap-3">
              <div className="flex-1 relative">
                <input
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 outline-none pl-10"
                  placeholder="Search your knowledge base..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <button className="px-6 py-3 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition-all flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7-7-7m14-6l-7-7-7 7"></path>
                </svg>
                Random Inspiration
              </button>
            </div>

            {/* Items Grid - Exactly as in screenshot */}
            <div className="space-y-4">
              {filteredItems.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all p-6">
                  <div className="flex items-start justify-between mb-3">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-${getCategoryColor(item.category)}-50 text-${getCategoryColor(item.category)}-700 border border-${getCategoryColor(item.category)}-200`}>
                      <span className={`w-1.5 h-1.5 rounded-full bg-${getCategoryColor(item.category)}-500`}></span>
                      {item.category}
                    </span>
                    
                    {/* Delete button */}
                    <button 
                      onClick={() => deleteItem(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                      </svg>
                    </button>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                  
                  <blockquote className="text-gray-500 italic mb-4 border-l-4 border-gray-200 pl-4">
                    {item.summary}
                  </blockquote>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        {item.date}
                      </span>
                      <span className="flex items-center gap-1">
                        {item.platform === 'instagram' && (
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"/>
                            <circle cx="12" cy="12" r="3" strokeWidth="2"/>
                            <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                          </svg>
                        )}
                        {item.platform === 'twitter' && (
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        )}
                        {item.platform}
                      </span>
                    </div>
                    
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-1 text-indigo-600 hover:text-indigo-700 font-medium"
                    >
                      View
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'add':
        return (
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900">Add Content</h1>
              <p className="text-sm text-gray-500 mt-1">Paste a link or text, and AI will classify & save it</p>
            </div>
            
            <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">URL</h2>
              <div className="mb-4">
                <input 
                  type="text" 
                  placeholder="https://www.instagram.com/p/..."
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 outline-none"
                />
              </div>
              
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">OR ADD TEXT</span>
                </div>
              </div>

              <h2 className="text-lg font-semibold mb-4">Content Text</h2>
              <div className="mb-4">
                <textarea
                  placeholder="Paste the caption, article text, or any content here..."
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 outline-none resize-none"
                />
              </div>

              <button 
                onClick={classifyAndSave}
                disabled={isClassifying}
                className={`w-full bg-indigo-500 text-white px-6 py-3 rounded-xl hover:bg-indigo-600 transition-all font-medium ${
                  isClassifying ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isClassifying ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Classifying...
                  </span>
                ) : 'Classify & Save'}
              </button>
            </div>

            {/* Preview Section */}
            {(urlInput || textInput) && (
              <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6">
                <h3 className="text-sm font-semibold text-indigo-900 mb-2">Preview</h3>
                <p className="text-xs text-indigo-700 mb-1">AI will analyze this content and save it to your dashboard</p>
                <p className="text-sm text-gray-600 mt-2">
                  {urlInput && <span className="block">🔗 {urlInput}</span>}
                  {textInput && <span className="block mt-1">📝 {textInput.substring(0, 100)}...</span>}
                </p>
              </div>
            )}
          </div>
        );

      case 'whatsapp':
        return (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900">WhatsApp Bot</h1>
              <p className="text-sm text-gray-500 mt-1">
                Connect your WhatsApp to save social media content on the go. Just send a link and let AI do the rest.
              </p>
            </div>

            {/* Connect Button */}
            <div className="mb-12">
              <button 
                onClick={connectWhatsApp}
                className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-xl hover:bg-green-600 transition-all text-lg font-semibold shadow-lg shadow-green-200"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.346.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
                Connect WhatsApp →
              </button>
            </div>

            {/* How It Works Section */}
            <h2 className="text-xl font-bold text-gray-900 mb-6">HOW IT WORKS</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {/* Step 1 */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Send a Link</h3>
                <p className="text-sm text-gray-500">Paste any Instagram, Twitter, YouTube, or blog link to the WhatsApp bot</p>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">AI Analyzes</h3>
                <p className="text-sm text-gray-500">The bot extracts content, classifies it into categories, and generates a summary</p>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Auto-Saved</h3>
                <p className="text-sm text-gray-500">Content is saved to your personal knowledge base with category tags</p>
              </div>

              {/* Step 4 */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Search Later</h3>
                <p className="text-sm text-gray-500">Find any saved content instantly using search and category filters</p>
              </div>
            </div>

            {/* What You Can Do Section */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">What You Can Do</h2>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Supports Instagram, Twitter/X, YouTube, TikTok, and blogs
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  AI-powered classification into 8 categories
                </li>
              </ul>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFBFC]">
      <style>{`
        :root {
          --brand-50: #F0F4FF;
          --brand-100: #DDE6FF;
          --brand-500: #4F6BF6;
          --brand-600: #3B54DB;
          --brand-700: #2E44B3;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>

      {/* Header with Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => setCurrentPage('dashboard')}>
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#4F6BF6] to-[#7C3AED] flex items-center justify-center shadow-lg shadow-indigo-200">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                </svg>
              </div>
              <div>
                <span className="text-[17px] font-bold tracking-tight text-gray-900">Social Saver</span>
                <span className="text-[10px] font-medium text-indigo-500 block -mt-0.5">KNOWLEDGE BASE</span>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage('dashboard')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  currentPage === 'dashboard' 
                    ? 'bg-indigo-50 text-indigo-700' 
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                    <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                    <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                    <rect width="7" height="5" x="3" y="16" rx="1"></rect>
                  </svg>
                  Dashboard
                </span>
              </button>

              <button
                onClick={() => setCurrentPage('add')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  currentPage === 'add' 
                    ? 'bg-indigo-50 text-indigo-700' 
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M5 12h14"></path>
                  </svg>
                  Add Content
                </span>
              </button>

              <button
                onClick={() => setCurrentPage('whatsapp')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  currentPage === 'whatsapp' 
                    ? 'bg-indigo-50 text-indigo-700' 
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                  </svg>
                  WhatsApp Bot
                </span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {renderPage()}
      </main>
    </div>
  );
};

export default App;