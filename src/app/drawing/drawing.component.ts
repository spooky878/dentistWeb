import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Circle, geometry, Group, Image, Path, Surface, Text} from '@progress/kendo-drawing';

const {transform} = geometry;

@Component({
  selector: 'app-drawing',
  templateUrl: './drawing.component.html',
  styleUrls: ['./drawing.component.css']
})
export class DrawingComponent implements OnInit {


  @ViewChild('surface')
  private surfaceElement!: ElementRef;
  private surface!: Surface;

  public ngAfterViewInit(): void {
    this.drawScene(this.createSurface());
  }

  public ngOnDestroy() {
    this.surface.destroy();
  }

  private createSurface(): Surface {
    // Obtain a reference to the native DOM element of the wrapper
    const element = this.surfaceElement.nativeElement;

    // Create a drawing surface
    this.surface = Surface.create(element);

    return this.surface;
  }

  ngOnInit(): void {
  }

  drawScene(surface: Surface) {

    var image = new Image("assets/images/ZSLeer.png", new geometry.Rect([0, 0], [791, 305]));

    // Create a path and draw a straight line
    const path = new Path({
      stroke: {
        color: `#9999b6`,
        width: 2
      }
    });

    path.moveTo(0, 50).lineTo(200, 50).close();

    // Create the text
    const text = new Text(`Hello World!`, [20, 25], {
      font: `bold 15px Arial`
    });

    // Place all the shapes in a group
    const group = new Group();
    group.append(path, text);

    // Rotate the group
    group.transform(
      transform().rotate(-20, [150, 25])
    );

    // Render the group on the surface
    surface.draw(image);
    surface.draw(group);
  }

  onClick(event: MouseEvent) {
    let kreis = new Circle(new geometry.Circle([event.offsetX, event.offsetY], 5));
    this.surface.draw(kreis);
  }
}
