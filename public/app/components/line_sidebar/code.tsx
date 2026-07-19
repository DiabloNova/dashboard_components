import LineSidebar from './LineSidebar';

<LineSidebar
  items={['Overview', 'Components', 'Animations', 'Backgrounds', 'Showcase']}
  accentColor="#dee7ec"
  textColor="#7d8b93"
  markerColor="#676364"
  showIndex
  showMarker
  proximityRadius={270}
  maxShift={57}
  falloff="smooth"
  markerLength={60}
  markerGap={0}
  tickScale={0.86}
  scaleTick
  itemGap={22}
  fontSize={0.95}
  smoothing={380}
  defaultActive={0}
  onItemClick={(index, label) => console.log(index, label)}
/>
