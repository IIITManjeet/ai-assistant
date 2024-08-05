const Header = () => {
  return (
    <header className="bg-gradient-to-r from-slate-900 to-slate-700 px-2 py-4 flex items-center justify-center">
      <div className="flex items-center justify-center">
        <img
          className="w-auto h-7"
          src="https://cdn.builder.io/api/v1/image/assets%2F80831ebc592245a9bb7889764d1141b4%2Ffec953d9e0ab46f58524c39d2b982870"
          alt="J&J"
        />
        <span className="text-white text-3xl font-bold ml-4">SpeechGPT</span>
      </div>
    </header>
  );
};

export default Header;
