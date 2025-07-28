
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	spring.datasource.url= jdbc:mysql://localhost:3306/Course?createDatabaseIfNotExist=true
spring.datasource.username=root
spring.datasource.password=root

spring.jpa.hibernate.ddl-auto=update
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.show-sql=true

spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQL8Dialect


	@Lob
	private byte image[];
			@RequestParam String description,
			@RequestParam MultipartFile image


public class GlobalExceptionHandler {

	@ExceptionHandler(CourseNotFoundException.class)
    public ResponseEntity<String> handleUserNotFoundException
    (CourseNotFoundException ex) {
        return new ResponseEntity<>(ex.getMessage(),
        		HttpStatus.NOT_FOUND);
    }
}


public class CourseNotFoundException extends RuntimeException {
	
	public ResponseEntity<String> handledCourseNotFOundException(
			CourseNotFoundException ex){
		return new ResponseEntity<String>(ex.getMessage(),HttpStatus.NOT_FOUND);
	}
	

}




//exception

@ControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler(CourseNotFoundException.class)
    public ResponseEntity<String> handleUserNotFoundException
    (CourseNotFoundException ex) {
        return new ResponseEntity<>(ex.getMessage(),
        		HttpStatus.NOT_FOUND);
    }




    public class CourseNotFoundException extends RuntimeException {
	
	 public CourseNotFoundException(String message) {
	        super(message);
	    }

     if (optional.isEmpty()) {
			throw new CourseNotFoundException("COurse Is not FOnd With the id" + id);
		}

     
    // One-to-One relationship with EmergencyContact01
    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    @JsonIgnoreProperties("user")
    private EmergencyContact01 emergencyContact01;
     
         @OneToOne
    @JoinColumn(name = "userID", nullable = false)
    @JsonIgnoreProperties("userID")
    private User user;


    // One user can have many images
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ImageUp> images;

    	@ManyToOne
	@JoinColumn(name = "user_id", nullable = false) // Foreign key reference to User
	@JsonIgnoreProperties("images") // Ignore the "images" field during serialization to avoid recursion
	private User user;



      // Mapping With Task
    @ManyToMany(mappedBy = "users",cascade = { CascadeType.PERSIST, CascadeType.MERGE })
    @JsonIgnoreProperties("users")
    private Set<Task> tasksAssignedTo = new HashSet<>();


        @ManyToMany
    @JoinTable(
        name = "task_user",  // Join table name
        joinColumns = @JoinColumn(name = "task_id"),  // Foreign key column for Task
        inverseJoinColumns = @JoinColumn(name = "assignedTo_id", referencedColumnName = "userID", nullable = true)  // Escaped foreign key column for User
    )
    @JsonIgnoreProperties("tasksAssignedTo")
    private Set<User> users = new HashSet<>();


    ⏱️ Practice Plan (Today Evening)
1 hour – Revise REST, Spring Boot basics, annotations.

1 hour – Practice React form with API submission.

1 hour – Write a simple full-stack app (CRUD only).

30 mins – Revisit SQL joins, pagination, validations.

30 mins – Go through your resume and past projects.
