import OptionWheel from './OptionWheel';

<OptionWheel
  items={['Ambient', 'House', 'Techno', 'Jazz', 'Lo-Fi', 'Synthwave']}
  defaultSelected={2}
  textColor="#4d6e68"
  activeColor="#cbe7ec"
  side="left"
  fontSize={1.5}
  spacing={1.65}
  curve={1.6}
  tilt={2.5}
  blur={1}
  fade={0}
  smoothing={250}
  inset={16}
  loop
  draggable
  soundUrl="/assets/sounds/click-soft.mp3"
  soundVolume={0.95}
  onChange={(index, item) => console.log(index, item)}
/>
