
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

     
