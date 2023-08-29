There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.
 Example 1:
Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.

  var canFinish = function(numCourses, prerequisites) {
    const adjacencyList = new Array(numCourses).fill(0).map(() => []);
    const inDegrees = new Array(numCourses).fill(0);

    for (const [course, prereq] of prerequisites) {
        adjacencyList[prereq].push(course);
        inDegrees[course]++;
    }

    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegrees[i] === 0) {
            queue.push(i);
        }
    }

    let coursesFinished = 0;
    while (queue.length > 0) {
        const current = queue.shift();
        coursesFinished++;

        for (const dependent of adjacencyList[current]) {
            inDegrees[dependent]--;
            if (inDegrees[dependent] === 0) {
                queue.push(dependent);
            }
        }
    }

    return coursesFinished === numCourses;
};
