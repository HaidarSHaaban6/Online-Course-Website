const initialColors = [
  "F44336",
  "2196F3",
  "4CAF50",
  "9C27B0",
  "FFC107",
  "009688",
  "9E9E9E",
  "795548",
  "FF9800",
  "E91E63",
];

class ColorPickerService {
  private static colors = initialColors;

  public static pickColor(): string {
    const color = this.colors[Math.floor(Math.random() * this.colors.length)];
    return "#" + color;
  }
}

export default ColorPickerService;
