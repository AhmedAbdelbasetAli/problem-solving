import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.PriorityQueue;

class Result {
    public static int getMinRooms(List<List<Integer>> meetingTimings) {
        // Create a list to store the start and end times of all meetings.
        List<int[]> intervals = new ArrayList<>();

        // Populate the intervals list from the meetingTimings.
        for (List<Integer> timing : meetingTimings) {
            int start = timing.get(0);
            int end = timing.get(1);
            intervals.add(new int[] {start, end});
        }

        // Sort the intervals by their start times.
        Collections.sort(intervals, Comparator.comparingInt(a -> a[0]));

        // Use a min heap (priority queue) to keep track of end times of ongoing meetings.
        PriorityQueue<Integer> endTimes = new PriorityQueue<>();

        // Initialize the room count.
        int rooms = 0;

        // Iterate through the sorted intervals.
        for (int[] interval : intervals) {
            int start = interval[0];
            int end = interval[1];

            // Check if any meeting has ended (its end time is less than or equal to the current start time).
            while (!endTimes.isEmpty() && endTimes.peek() <= start) {
                endTimes.poll(); // Remove the ended meeting.
            }

            // Add the current meeting's end time to the heap.
            endTimes.offer(end);

            // Update the room count.
            rooms = Math.max(rooms, endTimes.size());
        }

        return rooms;
    }
}
