import React from "react";

const MathGeometry = () => {
    return (
        <div className="w-full min-h-screen font-ComicNeue bg-lBackground text-lWhite px-8 py-6">
            <h2 className="text-[47px] tracking-tight leading-[53px]">Math and Geometry</h2>

            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">Introduction to Math and Geometry</h3>
                <p className="text-lg font-light mt-4 w-[84%] text-gray-300">
                    Mathematics and geometry play a crucial role in computational problem-solving. They are fundamental in solving 
                    problems involving shapes, coordinates, vectors, and trigonometry.
                </p>
                <p className="text-lg font-light mt-4 w-[84%] text-gray-300">
                    In programming, geometry is commonly applied in graphics, simulations, game development, and spatial algorithms.
                </p>
            </div>

            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">Important Geometric Concepts</h3>
                <ul className="mt-4 text-lg font-light list-disc pl-8 text-gray-300">
                    <li>
                        **Distance Formula:** Calculates the distance between two points in a 2D or 3D space.
                    </li>
                    <li>
                        **Slope of a Line:** Determines the steepness of a line connecting two points.
                    </li>
                    <li>
                        **Area of Shapes:** Computes areas for circles, triangles, polygons, etc.
                    </li>
                    <li>
                        **Angles:** Measures between two lines or vectors.
                    </li>
                </ul>
            </div>

            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">Example Problem: Check if Points are Collinear</h3>
                <p className="text-lg font-light mt-4 w-[84%] text-gray-300">
                    Three points are collinear if the area of the triangle they form is zero. The area of a triangle can be computed 
                    using the determinant formula:
                </p>
                <div className="bg-[#4d4e50] text-white p-4 rounded-lg shadow-lg font-mono text-sm max-w-full overflow-auto">
                    <pre className="whitespace-pre-wrap">
{`function areCollinear(x1, y1, x2, y2, x3, y3) {
    return (x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) === 0;
}`}
                    </pre>
                </div>
            </div>

            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">Applications of Math and Geometry</h3>
                <ul className="mt-4 text-lg font-light list-disc pl-8 text-gray-300">
                    <li>
                        **Game Development:** Simulating movements, collisions, and rendering objects.
                    </li>
                    <li>
                        **Computer Vision:** Recognizing patterns, detecting edges, and analyzing spatial data.
                    </li>
                    <li>
                        **GPS and Navigation:** Calculating shortest paths, distances, and angles between locations.
                    </li>
                    <li>
                        **Robotics:** Determining trajectories and object manipulations in space.
                    </li>
                </ul>
            </div>

            <div className="mt-10 border-l border-[#333333] px-4">
                <h3 className="text-3xl font-light">Advanced Geometry Topics</h3>
                <ul className="mt-4 text-lg font-light list-disc pl-8 text-gray-300">
                    <li>
                        **Convex Hull:** Finding the smallest convex polygon enclosing a set of points.
                    </li>
                    <li>
                        **Voronoi Diagrams:** Dividing a plane into regions based on distance to a set of points.
                    </li>
                    <li>
                        **Line Intersections:** Checking if two lines intersect and finding the intersection point.
                    </li>
                    <li>
                        **3D Rotations:** Using quaternions and matrices for efficient transformations in 3D space.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MathGeometry;
